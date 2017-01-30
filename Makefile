SHELL:=/bin/bash
BIN=./node_modules/.bin
SERVER_PORT=3000

all: install test

test: lint

# installing all dependencies required by application
install:
	npm install

# linting typescript/es6/scss syntax
lint:
	$(BIN)/tslint 'src/**/*.ts' -c tslint.json
	$(BIN)/tslint 'test/**/*.ts' -c tslint.json
	$(BIN)/sass-lint 'src/**/*.scss' -v
	$(BIN)/eslint 'config/*.js'

# run development server
server:
	$(BIN)/webpack-dev-server --inline --progress --host 0.0.0.0 --port $(SERVER_PORT) --config config/webpack-development.js

# creates a distribution build
build:
	rm -rf ./dist
	$(BIN)/webpack --config config/webpack-production.js --progress --profile --colors --bail
