#!/bin/bash
set -e

# clear and re-create the out directory
rm -rf dist || exit 0;
mkdir dist;

# build
npm run build

# deploy

npm run gh-pages