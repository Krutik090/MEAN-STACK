/*
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
} */
// default export and single export
exports.sumf = (a, b) => a + b;
exports.subf = (a, b) => a - b;
exports.mulf = (a, b) => a * b;
exports.divf = (a, b) => a / b;

//module.exports={sumf:sum,subf:sub,mulf:mul,divf:div};
/*
function oddeven(n) {
    if (n % 2 == 0) {
        return "Even";
    } else { return "Odd"; }
}
module.exports = { oddeven }; 
*/
exports.oddeven = (n) =>{return n%2==0 ? "EVEN" : "ODD"}