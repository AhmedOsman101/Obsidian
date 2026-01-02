#!/usr/bin/env bash

set -eo pipefail
trap 'exit 1' SIGUSR1

# ---  Main script logic --- #
input="$1"
output="${2:-speech.txt}"

if [[ "$input" =~ ^https?:// ]]; then
  pandoc "$input" -t plain --wrap=none
else
  pandoc "$input" -t plain --wrap=none
fi |
  sed '/^    /d;/^```/,/^```/d' \
    >"$output"
