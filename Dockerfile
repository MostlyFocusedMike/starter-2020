# this is where docker gets the image from
FROM node:latest

# code executes in the command line INSIDE the docker container
RUN mkdir -p /usr/app/

# set your working directory so that . is now /usr/src/app
WORKDIR /usr/app

# this copies everything you need into from local into your docker container to start
COPY ./src ./src/
COPY ./knexfile.js .
COPY ./package.json .

RUN npm install