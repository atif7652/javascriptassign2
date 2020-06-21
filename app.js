// Assignment of chap# 21 to 25;


// Task# 1

// var firstName=prompt("Enter your First Name:")
// var lastName=prompt("Enter your Last Name:")
// var fullName=firstName+lastName;
// alert("Hello! Welcome to my website "+fullName)



// Task# 2

// var mobile=prompt("Enter your favorite mobile phone model name")
// var check=mobile.length
// document.write("My favorite phone is: "+mobile+"<br>"+"Length of string: "+check)



// Task# 3

// var a="Pakistani"
// var b=a.indexOf("n")
// document.write("String: "+a+"<br>"+"Index of 'n' : "+b )



// Task# 4

// var k="Hello World"
// var o=k.lastIndexOf("l")
// document.write("String: "+k+"<br>"+"Last index of 'l' : "+o)



// Task# 5

// var x="Pakistani"
// var y=x.charAt(3)
// document.write("String: "+x+"<br>"+"Character at index 3: "+y)



// Task# 6

// var firstName=prompt("Enter your First Name:")
// var lastName=prompt("Enter your Last Name:")
// var fullName=firstName.concat(lastName);
// alert("Hello! Welcome to my website "+fullName)



// Task# 7

// var cityName="Hyderabad"
// var change=cityName.replace("Hyder","Islam")
// document.write("City: "+cityName+"<br>"+"After replacement: "+change)



// Task# 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var changeChar=message.replace(/and/g,"&")
// document.write("Text: "+message+"<br><br>"+"After replacemnt: "+changeChar)



// Task# 9

// var a="472"
// var x=typeof(a)
// var b=parseInt(a)
// var y=typeof(b)
// document.write("Value: "+a+"<br>"+"Type: "+x)
// document.write("<br> Value: "+b+"<br>"+"Type: "+y)



// Task# 10

// var userInput=prompt("Enter any text and convert into capital latters: like(A or Z)")
// var capital=userInput.toUpperCase();
// document.write("User input: "+userInput+"<br>"+"Upper case: "+capital)



// Task# 11

// var userInput=prompt("Enter any text and convert into capital latters: like(A or Z)")
// var title=userInput.slice(0,1).toUpperCase();
// var lower=userInput.slice(1).toLowerCase();
// document.write("User input: "+userInput+"<br>"+"Title case: "+title+lower)



// Task# 12

// var num=35.36;
// var str=num.toString()
// var remove=str.replace(".","")
// document.write("Number: "+num+"<br> Result: "+remove)



// Task# 13

// var find=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var changeFind=find.toLowerCase();
// var arr=["cake","apple pie","cookie","chips","patties"]

// for(var i=0; i<=4; i++){
//    if(changeFind===arr[i]){
//        document.write(changeFind+" is <b>available</b> at index "+i+" in our bakery")
//    }
// }







// Assignment of chap# 26 to 30;



// Task# 1

// var num=prompt("Enter a positive integer value:")
// var round=Math.round(num)
// var floor=Math.floor(num)
// var ceil=Math.ceil(num)
// document.write("Number: "+num+"<br> Round of value: "+round+"<br> Floor value: "+floor+"<br> Ceil value: "+ceil)



// Task# 2

// var num=prompt("Enter a negative floating point:")
// var round=Math.round(num)
// var floor=Math.floor(num)
// var ceil=Math.ceil(num)
// document.write("Number: "+num+"<br> Round of value: "+round+"<br> Floor value: "+floor+"<br> Ceil value: "+ceil)



// Task# 3

// var num=prompt("Enter any number")
// var absolute=Math.abs(num)
// document.write("The absolute value of "+num+" is "+absolute)



// Task# 4

// var dice=Math.random()*6 + 1
// var floor=Math.floor(dice) 
// document.write("random dice value: "+floor)



// Task# 5

// var coin=Math.random()*2 +1
// var floor=Math.floor(coin)
// document.write(floor)
// if(floor=="2"){
//      document.write("<br> Random coin value : Heads")
// }
// else if(floor=="1"){
//     document.write("<br> Random coin value : Tails")
// }



// Task# 6

// var num=Math.random()*100 + 1
// var floor=Math.floor(num)
// document.write("Random number between 1 and 100: "+floor)



// Task# 7

// var weight=prompt("Enter your weight in khilograms")
// var convertInt=parseInt(weight);
// document.write("The weight of user is "+convertInt+" kilograms")



// Task# 7

// var weight=prompt("Enter your weight in khilograms")
// var convertFlo=parseFloat(weight);
// document.write("The weight of user is "+convertFlo+" kilograms")



// Task# 8

// var secret=Math.random()*10 + 1
// var floor=Math.floor(secret)
// var guess=prompt("Enter a number between 1 and 10")
// if(floor==guess){
//      alert("Congratulation!")
// }
// else if(floor!==guess){
//     alert("Try again!")
// }










// Assignment of chap# 31 to 34;



// Task# 1

// var todayDate=new Date()
// document.write(todayDate)



// Task# 2

// var monthNames=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var a=new Date()
// var month=monthNames[a.getMonth()] 
// document.write("Current Month: "+month)



// Task# 3

// var daysName= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a=new Date()
// var day=daysName[a.getDay()] 
// document.write("Today is Day: "+day)



// Task# 4

// var daysName= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a=new Date()
// var day=daysName[a.getDay()] 
// if(day==="Sat" || day==="Sun"){
//         document.write("It's Fun day")
// }
// else {
//      document.write("Today is: "+day)
// }



// Task# 5

// var a=new Date()
// var date=a.getDate()
// if(date<=15){
//     document.write("First fifteen days of the month")
// }
// else if(date>=16){
//     document.write("Last days of the month") 
// }



// Task# 6

// var current=new Date()
// var mili=current.getTime()
// var min=mili/(1000*60);
// document.write("Current date: "+current+"<br> Elapsed milliseconds sice January 1,1970 "+mili+"<br> Elapsed minutes sice January 1,1970"+min)



// Task# 7

// var a=new Date()
// var hour=a.getHours()
// if(hour<12){
//       alert("It's AM")
// }
// else{
//         alert("It's PM")
// }



// Task# 8

// var laterDate=new Date("dec 31, 2020")
// document.write(laterDate)



// Task# 9

// var ramDate=new Date("june 18, 2015")
// var current=new Date()
// var diff=current-ramDate;
// var day=diff/(1000*60*60*24)
// var floor=Math.floor(day)
// document.write(floor+" days have passed since 1st Ramadan, 2015 ")



// Task# 10

// var ramDate=new Date("jan 1, 2015")
// var current=new Date()
// var diff=current-ramDate;
// var sec=diff/(1000*60)
// var floor=Math.floor(sec)
// document.write("On reference date "+current+"<br>"+floor+" seconds had passed since beginning of 2015")



// Task# 11

// var a=new Date()
// document.write("Current date: "+a+"<br>")
// a.setDate(18)
// a.setFullYear(2020)
// a.setHours(14)
// a.setMinutes(57)
// a.setSeconds(1)
// document.write("It was "+a+"<br>")
// var hour1=a.getHours()
// var currentTime=new Date()
// var hour2=currentTime.getHours()
// var diff=hour2-hour1;
// document.write(diff+" hour ago")



// Task# 12

// var a=new Date()
// document.write("Current date: "+a+"<br>")
// a.setDate(18)
// a.setFullYear(1920)
// a.setHours(14)
// a.setMinutes(57)
// a.setSeconds(1)
// document.write("It was "+a+"<br>")
// var year1=a.getFullYear()
// var currentTime=new Date()
// var year2=currentTime.getFullYear()
// var diff=year2-year1;
// document.write(diff+" years back")



// Task# 13

// var age=prompt("Enter your age")
// var curYear=new Date()
// var a=curYear.getFullYear()
// var diff=a-age
// document.write("Your age is: "+age+"<br> Your birth year is: "+diff)



// Task# 14

// var custName=prompt("Enter your name:;")
// var monthNames=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var a=new Date()
// var month=monthNames[a.getMonth()] 
// var unit=prompt("Enter number of units")
// var charge=prompt("Enter charges per units")
// document.write("<h1> K-Electric Bill: </h1> <br>"+"Customer Name: "+custName+"<br> Month: "+month+"<br> Number of units: "+unit+"<br> Charges per unit: "+charge)
// var netAmount=unit*charge;
// var late=350;
// var gross=(+netAmount)+(+late)
// document.write("<br><br> Net Amount Payable (with in Due Date): "+netAmount+"<br> Late payment surcharge: "+late+"<br> Gross Amount Payable (after Due Date): "+gross)






// Assignment of chap# 35 to 38;



// Task# 1

// function currentTime(){
//     var now= new Date()
//     document.write(now)
// }
// currentTime();



// Task# 2

// function greet(){
//     var firstName=prompt("Enter your First name")
//     var lastName=prompt("Enter your Last name")
//     alert("Hello! Wellcome to my website: "+firstName+lastName)
// }
// greet();



// Task# 3

// function add(){
//     var a=prompt("Enter first number")
//     var b=prompt("Enter second number")
//     var c=(+a)+(+b);
//     return c;
// }

// alert(add());



// Task# 4

// function calc(a,b,c){
//     if(c==="+"){
//         return (+a)+(+b);
//     }
//     else if(c==="-"){
//         return a-b;
//     }
//     else if(c==="*"){
//         return a*b;
//     }
//     else if(c==="/"){
//         return a/b;
//     }
//     else if(c==="%"){
//         return a%b;
//     }
// }
// var a=prompt("Enter first number")
// var b=prompt("Enter second number")
// var c=prompt("Enter operator (+,-,*,/,%)")

// alert(calc(a,b,c))



// Task# 5

// function square(a){
//      return a*a;
// }
// var a=prompt("Enter any number and it can be change into its square")
// alert(square(a))



// Task# 6

// function factorial(a){
//     for(var i=a-1; i>=1; i--){
//          a=a*i
//     }
//     return a;
// }
// var a=prompt("Enter any number to find its factorial")
// alert(factorial(a));



// Task# 7

// function count(a,b){
//     var r=""
//     for(var i=a; i<=b; i++){
//        r+=i;
//     }
//     return r;
// }
// var a=prompt("Enter a start number of counting")
// var b=prompt("Enter a end number of counting")
// document.write(count(a,b))



// Task# 8

// function hypo(b,p) {
//          var hyp=(+b)+(+p);
         
// function square(b,p){
//         var sqrHyp=(b*b)+(p*p);
//         return sqrHyp;
//     }
    
//     return square(b,p);
//     return hyp;
// }
// var b=prompt("Enter the base of right angle triangle")
// var p=prompt("Enter the perpendicular of right angle triangle")
// console.log(hypo(b,p))




// Task# 9

// function area(w,h){
//        var a=w*h;
//        return a;
// }
// alert(area(2,6))




// function area(w,h){
//        var a=w*h;
//        return a;
// }
// var w=prompt("Enter the width of rectangle")
// var h=prompt("Enter the height of rectangle")
// alert(area(w,h))




// Task# 10

// function palindrome(word){
// var check="";

// for(var i=word.length -1; i>=0; i--){
//   check += word[i];
// }

// if (word===check){
//     document.write(word + " is palindrome word");
//     return word;
// }
// else if (word!==check){
//     document.write(word + " is not  palindrome word");
//     return word;
// }

// }
// var word = prompt("Enter your word");
// palindrome(word);



// Task# 11

// function upperCase(sen) {
//     var arr = sen.split('')
//     arr[0] = arr[0].toUpperCase()
//     for(var i = 0; i < sen.length; i++) {
//     if (arr[i] === " ") arr[i + 1] = arr[i + 1].toUpperCase()
//     }
//     return arr.join('')
// }
// var sen=prompt("Enter any sentence")
// document.write("Example String: "+sen)
// document.write("<br> Expected output: "+upperCase(sen))



// Task# 12

// function theLongestWords (phrase) {
//     var arr = phrase.split(" ");
//     var longestSize = 0;
//     var longestWords = [];
//     for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length === longestSize) {
//     longestWords.push(arr[i]);
//     } else if (arr[i].length > longestSize) {
//     longestSize = arr[i].length;
//     longestWords = [];
//     longestWords.push(arr[i]);
//     }
//     }
//     return longestWords;
// }
// // console.log("The longest word(s): " + theLongestWords("one two three four thirteen five six seven eight "));
// var phrase=prompt("Enter some text and find the longest word")
// document.write("Example String: "+phrase)
// document.write("<br> Expected Output: "+theLongestWords(phrase))



// Task# 13

// function circum(r){
//     var pi=3.142;
//     var c=2*pi*r;
//     return c;
// }
// var r=prompt("Enter the radius of the circle to find the circumference of circle")
// document.write("Circumference of Circle: "+circum(r))



// function area(r){
//     var pi=3.142;
//     var a=pi*(r*r);
//     return a;
// }
// var r=prompt("Enter the radius of the circle to find the area of circle")
// document.write("Area of Circle: "+area(r))