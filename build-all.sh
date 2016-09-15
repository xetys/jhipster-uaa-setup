#!/bin/bash

cd uaa && ./gradlew clean -x test build bootRepackage -Pprod buildDocker &
cd app1 && ./gradlew clean -x test build bootRepackage -Pprod buildDocker &
cd app2 && ./gradlew clean -x test build bootRepackage -Pprod buildDocker &
cd gateway && ./gradlew clean -x test -x npmInstall build bootRepackage -Pprod buildDocker &

wait;

echo "built all!"
