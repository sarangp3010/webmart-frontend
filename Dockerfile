FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:16-alpine AS app
RUN apk add --no-cache chromium
ENV NODE_ENV production
WORKDIR /app
COPY . .
COPY --from=builder /app/build build/
EXPOSE 3000
CMD [ "npx", "serve", "build" ]