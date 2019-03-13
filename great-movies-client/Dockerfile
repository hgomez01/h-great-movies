# Setting base image
FROM node:latest
# Updating system version
RUN apt-get update && apt-get install

# Creating working directory
RUN mkdir -p /usr/src/clientapp
# Setting which is the working directory
WORKDIR /usr/src/clientapp

# Copying dependencies
COPY package.json /usr/src/clientapp
# Installing the dependencies in the workdir
RUN npm install

# Copying the source to the working directory
COPY . /usr/src/clientapp
# Exposing port in use
EXPOSE 4200
# Running the node application
CMD ["npm", "start"]