# NodeJS

## Installation & Setup

Install Homebrew, follow instructions here: [https://brew.sh](https://brew.sh)
Install system Node, Run: `brew install node`
Install NVM, for Node version management, follow instructions here: [https://github.com/creationix/nvm#installation](https://github.com/creationix/nvm#installation)
Install AVN, for auto Node version switching: `npm install -g avn avn-nvm`
Setup AVN, run: `avn setup`

## Usage

Projects should include `.node-version` file(s).

Upon changing into a project directory or subdirectory, AVN will auto switch your terminal session to the required version for the project.
