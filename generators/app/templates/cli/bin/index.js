#!/usr/bin/env node
"use strict";var s=Object.create;var i=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var u=(e,o,n,m)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of c(o))!g.call(e,t)&&t!==n&&i(e,t,{get:()=>o[t],enumerable:!(m=p(o,t))||m.enumerable});return e};var l=(e,o,n)=>(n=e!=null?s(f(e)):{},u(o||!e||!e.__esModule?i(n,"default",{value:e,enumerable:!0}):n,e));var a=l(require("prompts")),r=l(require("figlet"));function y(){console.log(r.default.textSync("Hello World!")),(0,a.default)([{type:"text",name:"name",message:"What is your name?",initial:"name"}]).then(e=>{console.log(e)})}y();