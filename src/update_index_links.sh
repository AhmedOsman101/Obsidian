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

    # Create or overwrite index.md file even if no notes are found in the current directory # FIXED
    {
        echo "# Notes"
        echo ""

        local child_notes_found=false

        # Find all directories
        for subdir in "$dir"/*; do
            if [[ -d "$subdir" ]]; then
                local subdir_name=$(basename "$subdir")
                local has_notes=false

                # Check if the subdirectory has .md files
                for subfile in "$subdir"/*.md; do
                    if [[ -f "$subfile" && "$subfile" != "$subdir/index.md" ]]; then
                        has_notes=true
                        child_notes_found=true # Indicate that we found notes in child directories # FIXED
                        break
                    fi
                done

                # Only process the subdirectory if it contains notes
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

        # If child directories have notes, ensure the index.md is created # FIXED
        if [[ "$child_notes_found" == true ]]; then
            echo "" # Ensure there's a new line at the end
        else
            return # No need to keep the index.md if there are no notes
        fi
    } >"$output_file"
}

# Main script execution
for dir in $(find . -type d); do
    if [ "$dir" != ".obsidian" ]; then
        generate_index "$dir"
    fi
done

echo "Index files created or updated."
