#!/usr/bin/env bash

set -eo pipefail
trap 'exit 1' SIGUSR1

# ---  Main script logic --- #
for file in *.md; do
  filename="${file%.*}"
  ./tts-txt.sh "${file}" "${filename}.txt"
  cat "${filename}.txt" |
    piper-tts \
      --model /home/othman/.local/share/piper/en_US/amy/medium/en_US-amy-medium.onnx \
      --output_file "${filename}.wav"
done
