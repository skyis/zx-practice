#!/usr/bin/env zx

import "zx/globals";

// let name = "foo & bar";
// await $`mkdir ${name}`;

try {
  await $`exit 1`;
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`Error: ${p.stderr}`);
}

console.log(chalk.blue("Hello world!"));

// question
let bear = await question("What kind of bear is best? ");
console.log(bear);

// let result1 = await spinner(() => $`kubectl get pods -A`);
// console.log(`result1 = ${result1}`);

// With a message.
let result2 = await spinner("working...", () => $`kubectl get pods -A`);
console.log(`result2 = ${result2}`);

// // そのまま表示される
// await $`kubectl get pods -A`;

let files = ["LICENSE", "package.json"];
let res = await $`ls -l ${files}`;
console.log(res);

await Promise.all([$`sleep 1; echo 1`, $`sleep 2; echo 2`, $`sleep 3; echo 3`]);

let resp = await fetch("http://wttr.in");
if (resp.ok) {
  console.log(await resp.text());
}

try {
  await $`exit 1`;
  await nothrow($`grep something from-file`);
} catch (p) {
  console.log(`p: ${p}`);
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`Error: ${p.stderr}`);
}
