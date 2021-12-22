#!/bin/sh
. ~/.nvm/nvm.sh
nvm use v16.13.0
echo Removing old resources...
cd maven-project/src/main/resources/public
rm -r -f ./*
echo Building react app...
cd ../../../../../react-ui/
npm run build
echo Copying build to target...
cd ../maven-project/src/main/resources/public/
cp -r ../../../../../react-ui/build/* .
echo Starting tomcat on port 8081...
cd ../../../../
mvn clean install
mvn clean install org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8081 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.55/tomcat-9.0.55.zip

