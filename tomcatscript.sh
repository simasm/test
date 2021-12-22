#!/bin/sh
echo Starting tomcat on port 8081...
cd maven-project
mvn clean install
mvn clean install org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8081 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.55/tomcat-9.0.55.zip

