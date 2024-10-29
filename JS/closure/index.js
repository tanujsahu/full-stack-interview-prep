function outer() {
  const str = "hello";
  function inner() {
    console.log(str);
  }

  return inner;
}


const outerCall = outer();
outerCall();
