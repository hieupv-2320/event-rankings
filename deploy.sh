#!/usr/bin/env sh
# abort on errors

rm -rf dist
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:hieupv-2320/test-deploy.git master:gh-pages
cd -
