// setTimeout() && clearTimeout()
const stVar = setTimeout(() => {
    console.log('Hello')
}, 3000);

clearTimeout(stVar);


// setInterval() && clearInterval()
const setIn = setInterval(() => {
    console.log('Hello')
}, 1000);

clearInterval(setIn);