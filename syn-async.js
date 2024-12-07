function a() {
    console.log("a");
}
function b() {
    setTimeout(() => {
        console.log("b-asynchronous");
    }, 4000);
}
function c() {
    console.log("c");
}
function d() {
    setTimeout(() => {
        console.log("d-asynchronous");
    }, 3000);
}
function e() {
    console.log("e");
}
function f() {
    setTimeout(() => {
        console.log("f-asynchronous");
    }, 2000);
}
function g() {
    setTimeout(() => {
        console.log("g-asynchronous");
    }, 1000);
}
function h() {
    console.log("h");
}


a();
b();
c();
d();
e();
f();
g();
h();

const [count, setCount] = useState(0);

useEffect(() => {
    console.log(setCount(count => count + 1))
},[count])