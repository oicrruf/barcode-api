# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.16

WORKDIR /app

# RUN apk add --update --no-cache \
#   make \
#   g++ \
#   build-base \
#   cairo-dev \
#   jpeg-dev \
#   pango-dev \
#   giflib-dev \
#   imagemagick \
#   libtool \
#   autoconf \
#   automake

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your Express.js app listens on (adjust this if needed)
EXPOSE 9000

# Start the Express.js app
CMD ["node", "./bin/www"]
