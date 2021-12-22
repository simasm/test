#!/bin/sh
#. ~/.nvm/nvm.sh
#nvm use v16.13.0
# folderis - thisscript, .git, react-ui, maven-project
echo Removing old resources...
cd maven-project/src/main/resources/public
rm -r -f ./*
echo Building react app...
cd ../../../../../react-ui/
if npm run build | grep "Failed\|failed\|error\|Error"
	then echo Npm build failed
	exit 1
else
	echo Npm build completed
fi
echo Copying build to target...
cd ../maven-project/src/main/resources/public/
cp -r ../../../../../react-ui/build/* .
echo Maven clean install...
cd ../../../../
if mvn clean install | grep "ERROR"
	then echo Maven build failed
	exit 2
else
	echo Maven build completed
fi
echo Starting tomcat on port 8081...
mvn clean install org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8081 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.55/tomcat-9.0.55.zip

