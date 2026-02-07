# Use Node.js LTS version
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Run the application
CMD ["npm", "start"]
