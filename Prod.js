
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('enter number', (answer) =>{
    var n=answer;
   var r= getProduct(n);
function getProduct(n)
{
    var product = 1;
    if(n>0 && n<32767){
    while (n != 0)
    {
        product = product * (n % 10);
        n = Math.floor(n / 10);
    }
    return product;
}
else{
    return -1;
}
}
    if(r==-1 || r>=32767){
    console.log("INVALID INPUT");
    } 
    else{
    console.log(r);
    }
    readline.close();
});