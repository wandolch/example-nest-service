## Description

## Installation

Node version - 12.17.0

```bash
$ npm install
```

## Setting up

The application uses AWS services so to run it you should initialize AWS credentials in your machine. 
Please install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html). 
After that open cmd and run `aws configure` command. 
Ask your team to provide needed credentials (AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, REGION). 

As a result AWS CLI creates a special credentials file in your machine that will be used by the app.

## Running in development mode

Before run the app, please copy file `configuration/.env-example` to the same folder and name it `.env`. 
This file contains all needed environment variables, like DB connection string, aws bucket name and etc. 
We can't commit sensitive data, so some values are empty. After it's done please run:

```bash
npm start
```

## Running in production mode
Before running prod, we should build the app:

```bash
npm run build
```

All values that are specified in `.env-example` can be also passed through env variables without creating `.env` file. 
It's really convenient for prod mode run. So ether you have everything in `.env` or you run like this:
```bash
npx cross-env BUCKET_NAME=your-value ENV_URL=your-value DB_URI=your-value npm run prod
```

