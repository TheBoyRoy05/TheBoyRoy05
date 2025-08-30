#!/bin/bash

set -e

cd ./src/Assets/Resume
cp Resume.pdf ../../../public/Resume.pdf
magick Resume.pdf ../Images/Other/Resume.jpg
echo $(date +'%B %d, %Y') >> ./last_updated.txt

if [[ $* == *-C* ]]; then
    latexmk -C
fi

echo "Resume updated successfully!"
