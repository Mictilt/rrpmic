# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the image
WORKDIR /app

# Copy the code of the app to the image
COPY rrpmic .

# Copy the package.json file to the image
COPY package.json .

# Install the dependencies
RUN npm install

# Specify the command to run the app
CMD [ "npm", "start" ]
