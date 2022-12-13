// stores data (value) by key
async function cache_store(key, value) {
}
// retrieves data by key (if it exists)
async function cache_retrieve(key) {
}
// fetches data from a slow data source
async function slow_function(input) {
}

function memoize(slow_function) {

    return (...args) => {
    const key = JSON.stringify(args); 
    if(cache_retrieve(key)){
        return cache_retrieve(key);
    }
    const result = slow_function(...args);
    cache_store(key,result);
    return result;

  }
}
const fn = (a, b) => a * b;
const memoizedFn = memoize(fn);
