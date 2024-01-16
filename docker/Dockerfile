FROM cgr.dev/chainguard/node as build

WORKDIR /app

COPY . .

RUN npm install \
 && npm run build

FROM cgr.dev/chainguard/node

COPY --from=build /app /app
WORKDIR /app

CMD ["build"]
