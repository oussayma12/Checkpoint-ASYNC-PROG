const chained = async () => {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
};

const firstFunction = async ()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("First function executed")}

const secondFunction = async()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("Second function executed")}

const thirdFunction = async()=> {
    await new  Promise ( delay => 
setTimeout(delay,1000))
console.log ("Third function executed")}

console.log(chained())