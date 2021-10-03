let a:string = "papap";

function checkPalindrome(b : string){
    const reverseString = b.split('').reverse().join('');

    if(b == reverseString){
        console.log("It is palindrome");
    }
    else
    console.log("It isn't palindrome")
}
checkPalindrome(a);