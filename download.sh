#! usr/env bash

read -p "phosphor-icons version: " version

# E.g. https://github.com/phosphor-icons/homepage/releases/download/v2.1.0/phosphor-icons.zip
curl -fsSL github.com/phosphor-icons/phosphor-home/releases/download/v$version/phosphor-icons.zip -O
unzip phosphor-icons.zip -d phosphor-icons

echo "Make sure to update the package version with \`npm version $version\`"
