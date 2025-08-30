#!/bin/bash

set -e

cd ./src/Assets/Resume
cp Resume.pdf ../../../public/Resume.pdf
magick -density 300 Resume.pdf -quality 100 -flatten ../Images/Other/Resume.jpg
echo $(date +'%B %d, %Y') > ./last_updated.txt

if [[ $* == *-C* ]]; then
    latexmk -C
fi

echo "Resume updated successfully!"
