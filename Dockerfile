FROM node:14.15 as builder
WORKDIR /askfriday
COPY . .
RUN yarn
RUN yarn build

FROM caddy:2.3.0
WORKDIR /var/www/askfriday
COPY --from=builder /askfriday/dist .
COPY caddy/Caddyfile /etc/caddy/Caddyfile
