
const readline=require('readline').createInterface({
input: process.stdin,
output: process.stdout})
readline.question('enter number', salary =>{
    var sal=salary;
        if(sal > 8000){
        console.log("Salary too large ");
        readline.close();
            }
        else if(sal<=0){
            console.log ("Salary too small");
            readline.close();
        }
        else{
            readline.question('enter number', shifts =>{
            var s=shifts;
            CalculateSal(sal,s); 
            if(s<0){
            console.log ("Shifts too small\n");}
            else{
                var r=CalculateSal(sal,s);
                console.log(r);
            }
            
        
        readline.close();
    })
}
})
function CalculateSal(sal,s){
    var savings;
    savings = (sal*(0.3+0.2))+(sal*0.02*s);
    return savings;
        
}

           
