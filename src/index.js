async function foo() {
  await Promise.resolve();
  console.log("foo");
}

foo();
