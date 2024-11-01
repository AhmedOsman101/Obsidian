#!/bin/bash

# Function to generate index.md file
generate_index() {
    local dir="$1"
    local output_file="$dir/index.md"
    local notes_found=false

    # Check if the directory contains any .md files
    for file in "$dir"/*.md; do
        if [[ -f "$file" && "$file" != "$output_file" ]]; then
            notes_found=true
            break
        fi
    done

    # If no notes are found, return without creating index.md
    if [[ "$notes_found" == false ]]; then
        return
    fi

    # Create or overwrite index.md file
    {
        echo "# Notes"
        echo ""

        # Find all directories
        for subdir in "$dir"/*; do
            if [[ -d "$subdir" ]]; then
                local subdir_name
                subdir_name=$(basename "$subdir")
                local has_notes=false

                # Check if the subdirectory has .md files
                for subfile in "$subdir"/*.md; do
                    if [[ -f "$subfile" && "$subfile" != "$subdir/index.md" ]]; then
                        has_notes=true
                        break
                    fi
                done

                if [[ "$has_notes" == true ]]; then
                    echo "- **$subdir_name**:"
                    # List .md files in subdirectory
                    for note in "$subdir"/*.md; do
                        if [[ -f "$note" && "$note" != "$subdir/index.md" ]]; then
                            note_name=$(basename "$note" .md)
                            # Replace spaces with %20 for path-friendly links
                            path_friendly_note_name=$(echo "$note_name" | sed 's/ /%20/g')
                            echo "  - [${note_name}]($subdir_name/$path_friendly_note_name.md)"
                        fi
                    done
                    echo ""
                fi
            fi
        done

        # List the current directory's .md files
        for note in "$dir"/*.md; do
            if [[ -f "$note" && "$note" != "$output_file" ]]; then
                note_name=$(basename "$note" .md)
                # Replace spaces with %20 for path-friendly links
                path_friendly_note_name=$(echo "$note_name" | sed 's/ /%20/g')
                echo "- [${note_name}]($path_friendly_note_name.md)"
            fi
        done
    } >"$output_file"
}

# Main script execution
for dir in $(find . -type d); do
    generate_index "$dir"
done

echo "Index files created or updated."
