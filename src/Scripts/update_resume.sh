#!/bin/bash

# Exit immediately if any command fails
set -e

# Convert Resume.pdf to Resume.jpg
magick Resume.pdf ../../Assets/Images/Other/Resume.jpg

echo "Resume updated successfully!"

# Only run latexmk -C if -C flag is provided
if [[ $* == *-C* ]]; then
    echo "Cleaning LaTeX build files..."
    latexmk -C
fi
