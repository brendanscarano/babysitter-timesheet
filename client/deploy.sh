#! ~/bin/bash

yarn build
tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/*
captainduckduck deploy -t ./deploy.tar
rm -rf ./deploy.tar