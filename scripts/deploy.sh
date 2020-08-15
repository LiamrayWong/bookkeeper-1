#! /usr/bin/env zsh

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:Mwanry/bookkeeper-1-website.git &&
git push -u origin master -f
cd -
