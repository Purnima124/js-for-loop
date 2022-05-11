var sum=0;
for(i=1;i<=10;i++){
    const r=require("readline-sync")
    var number=r.questionInt("Enter number")
    sum=sum+number
}
console.log(sum)


