#!/usr/bin/env node

import prompts from "prompts";
import figlet from "figlet";

function main() {
  console.log(figlet.textSync("Hello World!"));
  prompts([
    {
      type: "text",
      name: "name",
      message: "What is your name?",
      initial: "name"
    }
  ]).then(response => {
    console.log(response);
  });
}

main();
