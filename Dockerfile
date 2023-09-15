# base node image
FROM node:18 as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

COPY package.json package-lock.json ./
RUN npm install --include=dev

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
COPY package.json ./
RUN npm prune --omit=dev

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

COPY . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY . .

COPY --from=production-deps /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public

CMD ["npm", "start"]