#!/bin/bash
set -e

# Function to update a specific resume
update_resume() {
    local resume_type=$1
    local resume_name="Issac_Roy_${resume_type}"
    
    echo "Updating ${resume_type} resume..."
    
    # Copy PDF to public directory
    cp "${resume_name}.pdf" "../../../public/${resume_name}.pdf"
    
    # Convert PDF to JPG
    magick -density 300 "${resume_name}.pdf" -quality 100 -flatten "../Images/Other/${resume_name}.jpg"
    
    # Update last_updated.txt with timestamp for this resume
    local current_date=$(date +'%B %d, %Y')
    
    # Read existing last_updated.txt if it exists, or create empty
    local temp_file=$(mktemp)
    if [ -f "./last_updated.txt" ]; then
        # Remove old entry for this resume if it exists
        grep -v "^${resume_type}:" ./last_updated.txt > "$temp_file" 2>/dev/null || true
        # Add new entry
        echo "${resume_type}: ${current_date}" >> "$temp_file"
        mv "$temp_file" ./last_updated.txt
    else
        echo "${resume_type}: ${current_date}" > ./last_updated.txt
    fi
    
    echo "${resume_type} resume updated successfully!"
}

# Change to resume directory
cd ./src/Assets/Resume

# Check for --all flag
update_all=false
resume_types=()

# Parse arguments
for arg in "$@"; do
    case "$arg" in
        --all)
            update_all=true
            ;;
        SWE|DS|WEB)
            resume_types+=("$arg")
            ;;
        *)
            echo "Warning: Unknown argument '$arg'. Skipping..."
            ;;
    esac
done

# Update resumes
if [ "$update_all" = true ]; then
    echo "Updating all resumes..."
    update_resume "SWE"
    update_resume "DS"
    update_resume "WEB"
elif [ ${#resume_types[@]} -eq 0 ]; then
    echo "Usage: $0 [--all] [SWE] [DS] [WEB]"
    echo "  --all    Update all resumes"
    echo "  SWE      Update Software Engineering resume"
    echo "  DS       Update Data Science resume"
    echo "  WEB      Update Web Development resume"
    exit 1
else
    # Update specified resumes
    for resume_type in "${resume_types[@]}"; do
        update_resume "$resume_type"
    done
fi

# Clean LaTeX auxiliary files
latexmk -C

# Commit changes: if update_all is true, commit all resumes, otherwise list committed resumes
if [ "$update_all" = true ]; then
    git acp "Chore: Updated all resumes"
else
    # Join resume types with commas for the commit message
    resume_list=$(IFS=', '; echo "${resume_types[*]}")
    if [ ${#resume_types[@]} -eq 1 ]; then
        git acp "Chore: Updated ${resume_list} resume"
    else
        git acp "Chore: Updated ${resume_list} resumes"
    fi
fi

echo "All requested resumes updated successfully!"
