# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.18 

# Set the working directory in the container
WORKDIR /usr/src/app

ENV PORT=$PORT  
ENV DATABASE_URL=$DATABAE_URL
ENV NODE_ENV=$NODE_ENV

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
