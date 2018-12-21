#!/bin/bash

datetime=$(date "+%Y-%m-%d %H:%M:%S")
export REACT_APP_BUILD_DATE=$datetime
yarn build
unset REACT_APP_BUILD_DATE
tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/*
captainduckduck deploy -t ./deploy.tar
rm -rf ./deploy.tar
