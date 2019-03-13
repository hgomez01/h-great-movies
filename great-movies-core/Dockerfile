# Setting base image
FROM node:latest
# Creating working directory
RUN mkdir -p /usr/src/coreapp
# Setting which is the working directory
WORKDIR /usr/src/coreapp
# Copying dependencies
COPY package.json /usr/src/coreapp
# Installing the dependencies in the workdir
RUN npm install
# Copying the source to the working directory
COPY . /usr/src/coreapp
# Exposing port in use
EXPOSE 3000
# Running the node application
CMD [ "npm", "start" ]