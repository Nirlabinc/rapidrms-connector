FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install deps
RUN npm ci

# Copy source
COPY src ./src

# Build
RUN npm run build

# Expose MCP server on stdin/stdout
# For HTTP API wrapper (optional):
EXPOSE 3000

# Default: run MCP server
CMD ["npm", "run", "mcp"]

# For HTTP wrapper variant:
# CMD ["node", "dist/http-server.js"]
