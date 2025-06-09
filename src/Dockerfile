FROM node:slim

# Set working directory to the Next.js project
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Switch to non-root user for better security
USER node

EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]