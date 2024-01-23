# Asian Black Alliance

Welcome to the Asian Black Alliance website repo! The website can be accessed at AsianBlackAlliance.org, where you can learn more about the project and our team's research thus far. Below is a guide for setting up local development of the ABA website, built with NextJS, Sanity CMS, and Typescript.

#### Before starting, you should have Node.JS, NPM, and Homebrew (if MacOs) installed. 


## NextJS Setup
### 1. Clone the Repo
Use either the GitHub web GUI or the CLI with ```gh repo clone jackcdavey/AsianBlackAlliances``` to locally save the repo, and unzip in your development location.

### 2. Install Dependencies
Using the command line to navigate into the project folder, run ```npm install``` to download and install all necessary dependencies for the project

### 3. Run the Project
From the project root directory, run ```npm run dev``` to start the website on port 3000. If a browser window does not automatically open, you can view the site at ```localhost:3000```

## Sanity CMS Setup
### 1. Install Sanity CLI
Run ```npm install -g @sanity/cli``` to install the Sanity CLI globally on your machine. This will allow you to run Sanity commands from the command line.

### 2. Install Dependencies
Navigate into the ```sanity-studio``` folder and run ```npm install``` to install all dependencies for the Sanity Studio.

### 3. Run Sanity Studio
From the ```sanity-studio``` folder, run ```sanity build``` to build the Sanity Studio. Then, run ```sanity start``` to start the Sanity Studio on port 3333. If a browser window does not automatically open, you can view the Sanity Studio at ```localhost:3333```

### 4. Deploying Schema Changes
If you make changes to the Sanity schema, you will need to deploy those changes to the Sanity Studio. To do so, run ```sanity deploy``` from the ```sanity-studio``` folder. This will deploy the changes to the Sanity Studio, and you will be able to see them reflected in the Studio at ```localhost:3333``` or the deployed Studio at https://asianblackalliance.sanity.studio
