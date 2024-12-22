var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;  // first return count, then update count by 1
    };
};

 
const counter = createCounter(10);
console.log("🚀 ~ counter:", counter());
console.log("🚀 ~ counter:", counter());
console.log("🚀 ~ counter:", counter());
