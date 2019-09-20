FROM nginx
ENV AUTHOR=<YOUR_USERNAME>

WORKDIR /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY asset-manifest.json /usr/share/nginx/html
COPY manifest.json /usr/share/nginx/html
COPY service-worker.js /usr/share/nginx/html
COPY static /usr/share/nginx/html/static

CMD cd /usr/share/nginx/html && sed -e s/Docker/"$AUTHOR"/ index.html > index.htm ; nginx -g 'daemon off;'