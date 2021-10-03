function IsEqual(a : number, b : number, c : number){
    if(a == b && c == b)
        {
            console.log(3);
        }
        else if(a == b || b == c || c == a)
        {
            console.log(2);
        }
        else
        {
            console.log(0);
        }
}
IsEqual(0.3, 0.2, 0.2);