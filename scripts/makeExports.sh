#!/bin/bash

# Function to process each directory
process_directory() {
    local dir="$1"

    # Change to the specified directory
    cd "$dir" || exit

    # Check if index.ts exists
    if [ ! -f "index.ts" ]; then
        # Create an empty index.ts file
        touch index.ts

        # Find all .vue files in the directory
        vue_files=$(ls *.vue 2> /dev/null)

        # If there are no .vue files, skip this directory
        if [ -z "$vue_files" ]; then
            echo "No .vue files found in $dir. Skipping."
            rm -f index.ts # Remove empty index.ts if no .vue files
            cd - > /dev/null || exit # Return to previous directory
            return
        fi

        # Start writing the imports to index.ts
        for file in $vue_files; do
            # Get the base name without the extension
            base_name=$(basename "$file" .vue)

            # Add the import line to index.ts
            echo "import $base_name from \"./$file\";" >> index.ts
        done

        # Add the export line to index.ts
        echo -n "export { " >> index.ts
        for file in $vue_files; do
            base_name=$(basename "$file" .vue)
            echo -n "$base_name, " >> index.ts
        done

        # Remove the trailing comma and space, then add closing brace
        sed -i '' 's/, $/ }/' index.ts

        echo "index.ts file created successfully in $dir."
    else
        echo "index.ts already exists in $dir. No changes made."
    fi

    # Return to the previous directory
    cd - > /dev/null || exit
}

# Export the function to use it with find
export -f process_directory

# Start from the root directory (passed as an argument) and process all subdirectories
find "$1" -type d -exec bash -c 'process_directory "$0"' {} \;

