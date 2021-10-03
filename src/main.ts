function IsTriangle(a : number, b : number, c : number){
    if(a + b > c && c + b > a && a + c > b)
        {
            console.log("true");
        }
        else
        {
            console.log("false");
        }
}
IsTriangle(0.3, 0.2, 0.2);