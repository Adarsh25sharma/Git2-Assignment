//Check The Given Name is Palindrome Or Not
let str = "aman";
let rstr = "";

for (let i=str.length-1;i>=0;i--){
    rstr = rstr + str[i];
}
if(str==rstr){
    console.log("Yes the given name is palindrome");
}
else{
    console.log("No the given name is not palindrome");
}