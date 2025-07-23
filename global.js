//console.log(global);

global.setTimeout(() => {
    console.log('in timeout')
}, 3000);

console.log(__dirname);
console.log(__filename);