#!/bin/bash

# Function to create links in index.md for the given directory
create_links() {
    local dir="$1"
    local index_file="$dir/index.md"

    # Ensure the index.md file exists or create it if it doesn't
    if [[ ! -f "$index_file" ]]; then
        printf "# Notes\n" > "$index_file"
    fi

    # Clear previous links section if any
    printf "# Notes\n" > "$index_file"
    echo "## Explore" >> "$index_file.tmp"

    # Find all Markdown files in the current directory
    for file in "$dir"/*.md; do
        if [[ "$(basename "$file")" != "index.md" ]]; then
            echo "- [$(basename "$file".md)]($(basename "$file"))" >> "$index_file.tmp"
        fi
    done

    # Recursively find subdirectories and their Markdown files
    for subdir in "$dir"/*; do
        if [[ -d "$subdir" ]]; then
            echo "- **$(basename "$subdir")**:" >> "$index_file.tmp"
            create_links "$subdir" >> "$index_file.tmp"
        fi
    done

    # Append the existing content (if any) to the new index.md
    cat "$index_file" >> "$index_file.tmp"

    # Replace the old index.md with the new one
    mv "$index_file.tmp" "$index_file"
}

# Starting directory (current directory)
start_dir="$(pwd)"

# Loop through each directory in the starting directory
for dir in "$start_dir"/*; do
    if [[ -d "$dir" ]]; then
        create_links "$dir"
    fi
done

echo "Links created in index.md files recursively."
