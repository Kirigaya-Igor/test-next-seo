FROM node:20 AS builder

WORKDIR /app
COPY package.json package-lock.json next.config.ts ./
RUN npm ci

COPY . .

RUN npm run build

# --- production image ---
FROM node:20

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]
