FROM caddy:2.3.0
COPY caddy/Caddyfile /etc/caddy/Caddyfile
RUN mkdir /var/www/askfriday
COPY dist /var/www/askfriday
