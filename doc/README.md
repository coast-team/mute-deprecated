# Setting up development environment

## Install NodeJS

There are severals ways to install Node. We recommend install [Node Version Manager](https://github.com/creationix/nvm) and then execute:

    nvm install 5.1
    . ~/.bashrc

Check Node version:

    which node

---

## Install NodeJS packages

The following packages are required for the development. Install them globally:

    npm install -g jspm
    npm install -g eslint
    npm install -g htmlhint
    npm install -g live-server
    npm install -g node-sass

---

## Install Ruby
Debian family:

    sudo apt-get install ruby


---

## Install Ruby gems

    sudo gem install scss_lint

---

## Application versioning

The application follows the set of [Semantic Versioning](http://semver.org) rules when releasing a new version.

---

## Git

### Configuration
Required version: >=2.0

Checkout `.gitconfig` file in this folder. To apply these configuration options, execute the following commands (with either `--global` or `--local` option. If you choose `--local` option then they should be executed in the project root directory):

    git config --local core.autocrlf input
    git config --local pull.rebase true
    git config --local push.default simple
    git config --local rerere.enabled true
    git config --local alias.s "status -s"
    git config --local alias.ls "log --oneline --decorate --all --graph"
    git config --local alias.g "grep --break --heading --line-number"

### Commit message convention

We are using [`commitizen`](https://commitizen.github.io/cz-cli/) tool and [`cz-conventional-changelog`] adapter for structuring git commit messages.

---

## Code style

> **"Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec."**
*Idan Gazit*

### JavaScript style guide

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) code style has been chosen for the project plus a few changes are in `.eslintrc` file. Thanks to ESlint and Atom plugin , the code is checked both for style and errors in real-time, but yet checkout the style guide on github.

### AngularJS style guide

We follow [Angular Style Guide](https://github.com/johnpapa/angular-styleguide). You may also checkout [AngularJS Best Practices](https://github.com/angular/angular.js/wiki/Best-Practices).

### HTML/CSS style guide

Actually there is no html/css convention which stand out more then others, but checkout [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml). In Atom text editor `atom-beautify` package is responsible to format HTML files.

### SCSS style guide

[Scss-lint default configuration file](https://github.com/brigade/scss-lint/blob/master/config/default.yml) is extended by `.scss-lint.yml` file. A great article about SCSS style guide is [here](https://css-tricks.com/sass-style-guide/).

---

## Setting up Atom text editor

With some configurations and plugins Atom might be transformed into a real IDE. Let's do it here. Install Atom from [atom.io](https://atom.io).

### Mandatory plugins

Install the following plugins:

- [linter](https://atom.io/packages/linter)

- [linter-eslint](https://atom.io/packages/linter-eslint)

- [sass-autocompile](https://atom.io/packages/sass-autocompile)
  - Set `../css/$1.css` for *Filename pattern for 'compressed' compiled files* package option.

- [atom-beautify](https://atom.io/packages/atom-beautify)
  - Check *Language Config - HTML - Beautify On Save* package option.
  - Check *Language Config - JSON - Beautify On save* package option.
  - Check *Language Config - JavaScript - Disable Beautifying Language* package option.

- [linter-htmlhint](https://atom.io/packages/linter-htmlhint)

- [jsonlint](https://atom.io/packages/jsonlint)

### Recommended plugins

The following plugins might help you during development:

- [angularjs](https://atom.io/packages/angularjs)
- [autoclose-html](https://atom.io/packages/autoclose-html)
- [minimap](https://atom.io/users/atom-minimap)
- [file-icons](https://atom.io/packages/file-icons)
- [pigments](https://atom.io/packages/pigments)
