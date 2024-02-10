# Use a base Node.js image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Expose the port where the app runs
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
