#!/bin/bash
URL="https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
FILE_NAME="dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
PATH_DIR="/opt/build/repo/dart-sass"

curl -LJO $URL
tar -xf $FILE_NAME
rm $FILE_NAME
export PATH=$PATH_DIR:$PATH

if [ "$1" == "deploy-preview" ] || [ "$1" == "branch-deploy" ]; then
  npm run build -- -b $DEPLOY_PRIME_URL
else
  npm run build
fi
