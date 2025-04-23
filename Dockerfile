
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Second stage: minimal runtime
FROM node:18-alpine

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app /app

# Use non-root user
USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
