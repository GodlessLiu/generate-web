"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const globalCopyTplOption = {
  globOptions: {
    dot: true,
    gitignore: true
  }
};

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the groovy ${chalk.red("generator-web")} generator!`)
    );
    const prompts = [
      {
        type: "text",
        name: "name",
        message: "Your project name",
        default: "my-project"
      },
      {
        type: "list",
        name: "type",
        message: "Your project type",
        choices: ["vue3", "react", "cli"],
        default: "vue3"
      }
    ];
    return this.prompt(prompts).then(answer => {
      // To access props later use this.props.someAnswer;
      this.answer = answer;
    });
  }

  writing() {
    const { type, name } = this.answer;
    this.fs.copyTpl(
      this.templatePath(type),
      this.destinationPath(name),
      this.answer,
      {},
      globalCopyTplOption
    );
  }
};
