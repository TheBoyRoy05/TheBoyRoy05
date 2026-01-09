#!/bin/bash
set -e

cd ./src/Assets/Resume

cp Issac_Roy_SWE.pdf ../../../public/Issac_Roy_SWE.pdf
magick -density 300 Issac_Roy_SWE.pdf -quality 100 -flatten ../Images/Other/Issac_Roy_SWE.jpg

cp Issac_Roy_DS.pdf ../../../public/Issac_Roy_DS.pdf
magick -density 300 Issac_Roy_DS.pdf -quality 100 -flatten ../Images/Other/Issac_Roy_DS.jpg

cp Issac_Roy_FS.pdf ../../../public/Issac_Roy_FS.pdf
magick -density 300 Issac_Roy_FS.pdf -quality 100 -flatten ../Images/Other/Issac_Roy_FS.jpg

echo $(date +'%B %d, %Y') > ./last_updated.txt
if [[ $* == *-C* ]]; then
    latexmk -C
fi

echo "Resumes updated successfully!"
