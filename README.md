[TheHelmsman/js_test_theboats](Repository: https://github.com/TheHelmsman/js_test_theboats)

# js_test_theboats
Test assignment of The Boats company

# Installation
yarn install

# Available scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

# Creating docker container
Build application using build command from scripts section
Copy 
### `Dockerfile`
into build folder
Make sure you run Docker Desktop and docker commands available on your terminal window
Check it using following commands:
### `$ docker --version`
### `Docker version 19.03, build c97c6d6`
### `$ docker-compose --version`
### `docker-compose version 1.24.1, build 8dd22a9`
### `$ docker-machine --version`
### `docker-machine version 0.16.0, build 9ba6da9`
Go to build directory and check Dockerfile that you copied there
Edit your Docker file and edit <YOUR_USERNAME> to the docker username
Run following command to build docker image:
### `docker build -t <YOUR_USERNAME>/myfirstapp .`
Run your image using following command:
### `docker run -p 8888:5000 --name myfirstapp -e AUTHOR="<YOUR_USERNAME>" -d -p 8080:80 <YOUR_USERNAME>/myfirstapp`
Open your browser and check following url:
### `localhost:8080`

# Other useful docker commands:
To check docker image after build:
### `docker images`
### `REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE`
### `thehelmsman/myfirstapp      latest              fc337e947101        8 minutes ago       126MB`

To check docker images you are running:
### `docker ps`
### `CONTAINER ID        IMAGE                    COMMAND                  CREATED              STATUS              PORTS                                          NAMES`
### `c8b13fb2d56b        thehelmsman/myfirstapp   "/bin/sh -c 'cd /usr…"   About a minute ago   Up About a minute   0.0.0.0:8080->80/tcp, 0.0.0.0:8888->5000/tcp   myfirstapp`

To stop docker image that you are running:
### `docker stop c8b13fb2d56b`
### `docker rm c8b13fb2d56b`
