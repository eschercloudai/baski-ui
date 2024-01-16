FROM node:21-alpine as build

WORKDIR /app

COPY . .

RUN npm install \
 && npm run build

FROM cgr.dev/chainguard/node:latest

COPY --from=build /app /app
WORKDIR /app

CMD ["build"]
