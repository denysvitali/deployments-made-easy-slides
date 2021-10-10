FROM node:15 AS builder
COPY . /app
WORKDIR /app
RUN yarn install
# HACK: patch spectacle
RUN cd node_modules/spectacle/ && patch -p 1 < /app/hack/001-patch-spectacle.diff
RUN yarn build

FROM nginx:1
COPY --from=builder /app/build/ /usr/share/nginx/html/
