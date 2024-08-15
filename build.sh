#!/bin/sh

set -o errexit
set -o xtrace

mkdir -p dist
npx esbuild --bundle src/client.tsx --outfile=dist/app.js
npx esbuild --bundle server.tsx --outfile=build/server.js
node build/server.js >build/server.out
node replace.js >dist/index.html

