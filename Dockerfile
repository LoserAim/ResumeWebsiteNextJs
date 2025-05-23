﻿FROM node:23-alpine AS base

FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY resume-website/package.json ./
RUN npm i --legacy-peer-deps

FROM base AS builder
ENV NEXT_PRIVATE_STANDALONE=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV="production"
ARG VERSION=${VERSION}
ENV NEXT_PUBLIC_VERSION=${VERSION}
ARG API_URL=${API_URL}
ENV NEXT_PUBLIC_API_URL=${API_URL}
ARG API_KEY=${API_KEY}
ENV NEXT_PUBLIC_API_KEY=${API_KEY}
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY resume-website .
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
COPY --from=builder /app/node_modules ./node_modules

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT 8080
EXPOSE 8080
ENV HOSTNAME 0.0.0.0

CMD ["npm", "start"]
