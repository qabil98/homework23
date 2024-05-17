// // task-1
// 1. Bir funksiya yazın həmən funksiya parametr olaraq bir cümlə qəbul etsin və cümlədəki hər sözün ilk hərfini böyük hərfə çevirsin.

function ilkherfiboyuk(cumle){
 
    let ayrilmisText=cumle.split(" ");
    
let yeniSozler=ayrilmisText.map(function(soz){
    return soz.charAt(0).toupperCase() + soz.slice(1);

});
let yeniCumle=yeniSozler.join(" ");
return yeniCumle;
}

let cumle=prompt("metn daxil edin")
let result=ilkherfiboyukyuk(cumle);
console.log(result);









// task 2



// function palindrome(str){
//     let cleanedStr=str.toLowerCase().replace(/[\W_]/g, '');
//     let reversedStr=cleanedStr.split('').reverse().join('');
//     return cleanedStr===reversedStr;
// }



// let text = prompt("metni daxil edin")

// console.log(palindrome(text));







// task 3

//  Bir funksiya yazın həmən funksiya 3 parametr qəbul etsin 1-ci hər hansı bir string ex: "Jhon Doe", 
//  2-ci bir herfden ibaret strnig ex: "a" və ya "T", 3-cü  isə true və ya false  dəyəri qəbul etsin.
//   daha sonra funksiya gələn birinci stringin içində gəzərək ikinci stringin olduğu hissələri tapıb onları gələn 
// 3-cü parametrə (true və ya false) görə böyük yada kiçik hərfə çevirsin sonda isə dəyişdirilmiş stringi qaytarsın.

// ex 1: modifyString("Jhon Doe", "e", true) // output: "Jhon DoE"

// ex 2: modifyString("Jhon Doe", "j", false) // output: "jhon Doe"

// ex 3: modifyString("Jhon Doe", "o", true) // output: "jhOn DOe"



function myfunc(a,b,c){
    let string=a.split();
    for(i=0;i<string.length;i++){
        if(string[i].toLowercase()===b.toLowercase()){
            if(c===true){
                string[i]=string[i].toUpperCase()
            }else{
                string[i]=string[i].toUpperCase()
            }
        }
    }
    return string.join("")
}

let newfunc=myfunc("QabilQedimaliyev","e",true)
console.log(newfunc);














