FROM httpd:alpine

# Copy our custom httpd.conf to enable needed modules
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Create a simple shell script to handle all error codes
RUN echo '#!/bin/sh' > /usr/local/bin/docker-entrypoint.sh && \
    echo 'set -e' >> /usr/local/bin/docker-entrypoint.sh && \
    echo 'cd /usr/local/apache2/htdocs/' >> /usr/local/bin/docker-entrypoint.sh && \
    echo 'for code in $(seq 400 599); do' >> /usr/local/bin/docker-entrypoint.sh && \
    echo '  if [ ! -f "${code}.html" ]; then' >> /usr/local/bin/docker-entrypoint.sh && \
    echo '    cp default.html "${code}.html"' >> /usr/local/bin/docker-entrypoint.sh && \
    echo '  fi' >> /usr/local/bin/docker-entrypoint.sh && \
    echo 'done' >> /usr/local/bin/docker-entrypoint.sh && \
    echo 'exec httpd-foreground "$@"' >> /usr/local/bin/docker-entrypoint.sh && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port 80
EXPOSE 80

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"] 