FROM node:23-alpine AS base

FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm i --legacy-peer-deps

FROM base AS builder
ENV NEXT_PRIVATE_STANDALONE=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV="production"
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]