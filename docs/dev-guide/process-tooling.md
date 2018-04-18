# Process & Tooling

## Design ➞ Dev Handoff

* Create style guide
* Break out common components
* Review meeting with designer/developer to talk mobile for each component/page (if no specific mobile designs exists) and interactions/animations

## Command Line

Use whatever makes you comfortable, but most of the team uses ZSH with the oh-my-zsh framework on top for added convenience.

### ZSH

Install ZSH: [https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

## Version Control

Version control is by far the most important part of our development workflow. It allows us to compare files, identify differences, merge changes, and track builds. We use [Git](https://git-scm.com/) as our version control system.

### Hosting

We use [Bitbucket](https://bitbucket.org) to host our Git repositories. When you first start a project, create a remote repository. Name it simply, using dash case.

Sample repo name: `my-project`

Then clone the repository to your local machine.

### Workflow

Our workflow is modeled after [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). There are two main branches in every project:

* `master`
* `develop`

#### Master

`origin/master` always reflects a production-ready state. It should be able to be deployed at any time. In continuous integration workflows, a commit on `master` will trigger a deployment automatically.

#### Develop

`origin/develop` contains the latest development changes for the next release. When the code in `develop` reaches a stable point and is ready for release, `develop` will be merged back into `master` and tagged with a release number.

#### Supporting Branches

Additional branches should be created to address various scenarios. The main types of branches we use are:

* **feature** branches
* **release** branches
* **hotfix** branches
* **refactor** branches

#### Feature Branches

Feature branches are used to develop new features for an upcoming or distant future release.

* May branch off from: `develop`
* Must merge back into: `develop`
* Naming convention: `feat/[name]`

#### Hotfix Branches

Hotfixes branches are used to fix critical bugs that are found in production and must be released immediately.

* May branch off from: `master`
* Must merge back into: `develop` and `master`
* Naming convention: `fix/[name]`

#### Refactor Branches

Refactor branches are used for major refactoring tasks that may take a good amount of time, but don't represent a new feature.

* May branch off from: `develop`
* Must merge back into: `develop`
* Naming convention: `refactor/[name]`

### Versioning

Use [npm-version](https://docs.npmjs.com/cli/version) to bump package version numbers. We use [semantic versioning](http://semver.org/) to increment our release versions.

This can generally be summarized as:
`[major].[minor].[patch]`

* **major**: when you make breaking API changes
* **minor**: when you add functionality in a backwards-compatible manner
* **patch**: when you make backwards-compatible bug fixes

### Commit Messages

Whenever committing code, use the same commit message format to keep things consistent and allow other team members to more easily digest the commit history.

Use the following [semantic commit message](https://seesparkbox.com/foundry/semantic_commit_messages) style:

```
feat: add hat wobble
^--^  ^- - -- - -- - -- - -^
|     |
|     +-> Summary in present tense.
|
+- - -- - --> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Code Review

// TODO

### Issue Tracking

// TODO

## Project Setup & Structure

### Yeoman Generator

[Yeoman](http://yeoman.io/) generators allow us to quickly scaffold new projects. WHQ's generator currently scaffolds a basic PHP project with a webpack configuration. More generators will be added in the future.

Clone the WHQ yeoman generator from [https://github.com/worldhqinc/generator-whq](https://github.com/worldhqinc/generator-whq).

### Directory Structure

WHQ projects typically have something similar to the following directory structure:

```
.
├── css/
|   └── main.css
├── img/
├── js/
|   └── main.js
├── pages/
├── partials/
├── .editorconfig
├── .gitignore
├── .node-version
├── .favicon.ico
├── index.php
├── package.json
├── README.md
├── webpack.config.js
```

### Commonly Needed Files

|Filename                       |Purpose
| -------------------------     |---------------
|`main.js`	                    |Main entry point for webpack
|`main.scss` (or `main.css`)	|Main file with all style imports
|`.editorconfig`	            |Defines code style conventions for editor
|`.gitignore`	                |Defines files that should be ignored by git
|`webpack.config.js`	        |Configuration for webpack
|`index.php` (or `index.html`)	|Main entry point for site or app

### Commonly Needed Directories

|Directory Path                 |Purpose
| -------------------------     |---------------
|`/js`	                        |Includes all scripts
|`/scss` (`/css`)	            |Includes all stylesheets
|`img`	                        |Includes all images
|`/partials`	                |Includes commonly reused modules and components
|`/pages` (`/templates`)	    |Includes single page template files
