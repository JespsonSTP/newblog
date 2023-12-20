---
title: "Deploying React app to Aws S3 using github actions and terraform"
subtitle: "Create react project from scratch and deploying it on aws s3"
date: "2023-12-21"
---

This is a site that I am creating for a side project. The web will is in react and the mobile will be in react native. Here is the Overall bird's eye view of the project:


Here the more detail architecture of the react web client for the website:


Based on when you reading this, it may or may not be completed, I am starting this from scratch with the idea of to learn of to manage a react project in real life and not just using create-react-app. 

## Create directory
```bash
mkdir client
mkdir client/web
mkdir client/mobile

```
I will be working only on the web in this project

## Initialize the project

```bash
cd client/web
npm init -y

```
This initialize our project and creates package.json and package.lock.json, which are used to manage our depencies and the version that our project is using, in the package.json we can also write commands that can be triggered in the cli for adding automation to our project 

## Download the react dependency

```bash
npm install react react-dom

```
### Downloader and Bundler dependecies

```bash
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli 

npm install webpack-dev-server html-webpack-plugin --save-dev

```

### Breakdown dependecies

babel-core - standard 
babel preset-env transpile new standard of js into older version compatible with the browsers
babel preset-react turn jsx code into actual js code
babel loader connects babel to webpack
webpack
webpack-cli 


### Lets Start building the app

/client/web
```bash
mkdir public
touch index.html
```

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeFoodies!</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>

```
The Id root is where we going to inserts the react code into the html. Next step is to create the entry to out app.

```bash
cd ..
mkdir src
cd src
touch index.js
touch app.js
```
The code for index.js

```jsx

//we are importing our react dependecies
import React from 'react';
import ReactDOM from 'react-dom';

//we are selecting the id root located in index.html and using and we will be inserting the react proj there
ReactDOM.render(, document.getElementById('root'));

```
The code for App.js

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, lets go it's up React!</h1>
    </div>
  );
}

export default App;

```

next im going to import the App function into the index.js since it is really the official entrance to our app 

new and improved index.js

```jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


```

### Setting up configuration for babel

Typos are probably going to be the main source for errors as it was for me ngl

```bash
cd ..
touch .babel.rc

```

```jsx
{
	"presets":["@babel/preset-react", "@babel/preset-env"]
}
```

### Setting up configuration webpack 

```bash
touch webpack.config.js
```
```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  //the entry to the app
  entry: './src/index.js',
  //output after running npm build
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  //plugins that we are using in our project
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

```

### Set the commands to start our app on dev or build on production

In package.json, in the script section, we insert commands there as previously stated to start and build our project. 
```jsx

"scripts": {
    "dev": "webpack-dev-server --mode development --hot --open",
    "build": "webpack --config webpack.config.js --mode production"
  }

```

### Set the terraform to build our infrastructure aka just some damn aws services smh

1- Terraform backend

Im not going into details of terra just know this is best practice to set up a backend to store our statefile as we can send it to github/gitlab. we cli for this why because the browser too far ion know lol

    a. create s3 bucket and add versioning

    ```bash
    aws s3api create-bucket --bucket bucketname --region us-east-1

    aws s3api put-bucket-versioning --bucket bucketname
    --versioning-configuration Status=Enabled
    ```
    b. add dynamo for locking mechanism

    ```bash
    aws dynamodb create-table --table-name tablename --attribute-definitions AttributeName=LockID,AttributeType=S --key-schema AttributeName=LockID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --region us-east-1
    
    ```

I can change the region all is customizable apparently.


### Important terraform commands 

terraform init initialize projects after setting up backend 
terraform plan see the services terra will spin up
terraform apply we like what we see so we give a go

.....ongoing post




