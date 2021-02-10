FROM caddy:2.3.0
COPY caddy/Caddyfile /etc/caddy/Caddyfile
COPY dist /var/www/askfriday
