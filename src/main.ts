let a:number[]=new Array(70,-60,50);

function RockPaperScissors(a:number[]){
    a.sort();

    console.log( Math.abs(a[a.length-1])-Math.abs(a[0]));
}
RockPaperScissors(a);