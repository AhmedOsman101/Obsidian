#!/usr/bin/env bash

set -euo pipefail

trap 'exit 1' SIGUSR1

# ---  Main script logic --- #
usage() {
  echo "Usage: $0 [v|s]"
  echo "  v   process oldest file from \$HOME/Videos/OBS"
  echo "  s   process oldest file from \$HOME/Pictures/Screenshots"
  exit 1
}

# require exactly one argument
[[ $# -eq 1 ]] || usage

# pick working directory
case $1 in
v) dir="$HOME/Videos/OBS" ;;
s) dir="$HOME/Pictures/Screenshots" ;;
*) usage ;;
esac

cd "$dir" || log-error "cannot cd to $dir"
targetDir="${HOME}/Documents/obsidian/src/College/yearOne/secondTerm/IntroToIot/Assignments"

file=$({ eza -1 --sort oldest . || true; } | head -n1) || log-error "No files found in ${dir}"

# extract extension
extension="${file##*.}"

# count how many figure-*.ext already exist
count=$(fd -e "$extension" -t f -g "figure-*.${extension}" "${targetDir}" | wc -l)

# next index is count+1
next=$((count + 1))
newname="figure-${next}.${extension}"

# ensure source exists, then move
if [[ -e "$file" ]]; then
  mv -- "$file" "${targetDir}/${newname}"
  log-success "Moved '$file' -> '${newname}'"
else
  log-error "source file '$file' vanished" >&2
fi
