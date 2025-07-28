// let coin = Math.random();
//     if (coin < 0.5 ){
//         console.log("Heads");
        
// } else {
//         console.log("tail");
// }
// let a = Math.floor(coin) ;
// console.log(a);

// let otp = Math.floor(Math.random() *999 + 1000);
// console.log(otp);




// let otp = Math.floor(Math.random() *999 + 2000);
// console.log(otp);

// let otp = Math.random();
// let a = Math.floor(otp) *999 + 1000;
// console.log(a);

// let a = Math.random();
// let b = Math.ceil(a) * 5 + 5;
// console.log(Math.sqrt(b,2));


// let a = +prompt("Enter A Number ");
// let b = +prompt("Enter A Number");
// let c = +prompt("Enter A Number");

// if (a > b && a > c){
//     console.log("A is greater")
// } 
// else if (b > a && b > c){
//     console.log("B is greater")
// } 
// else{
//     console.log("C is greater")

// }



// let a = +prompt("Enter A Number ");
// let b = +prompt("Enter A Number");
// let c = +prompt("Enter A Number");

// if (a > b && a > c){
//     console.log("A is Greater");
// }
// else if (b > a && b > c){
//     console.log("B is Greater");
// }
// else{
//     console.log("C is Greater");
// }



// for (i = 100 ; i >= 0 ; i--){
//     console.log(i);
// }


// let arr = ["aman", "bilal","rohan","saif","saad","shuja"];
// let fat = ["farhan","farhan","farhan","kamran","rizwan","imran"];
// for(i = 0 ; i < arr.length; i++){
//     // console.log(arr);
//    for(j = i ; j < fat.length; j++){
//         console.log(arr[i]+ " "+ fat[i]);
//     }
// }



 let arr = ["aman", "bilal","rohan","saif","saad","shuja"];
let fat = ["farhan","farhan","farhan","kamran","rizwan","imran"];
for (i = 0 ; i < arr.length ; i++){
    let a = arr[i];
    for (j = 0 ; j < fat.length ; j++){
        let b = fat[i];
        console.log(a+ " " + b);
    }
}