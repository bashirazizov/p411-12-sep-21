// var dayOfTheWeek = 3;

// switch (dayOfTheWeek) {
//     case dayOfTheWeek:1
//         console.log("Monday")
//         break;
//     case dayOfTheWeek:2
//         console.log("Tuesday")
//         break;
//     default:

//         break;
// }


// var number = 255;
// var divider = 1;

// while (divider<=number) {
//     if (number%divider==0) {
//         console.log(divider);
//         console.log(divider*(-1));
//     }
//     divider++;
// }



// var number = 255;

// for (var i = 1; i <= number; i++) {
//     if (number%i==0) {
//         console.log(i);
//         console.log(i*(-1));
//     }
// }


// 3 semestr bali bir imtahan bali daxil edilir. 
// her bal maximum 100 minimum 0 ola biler.
// semestr ballarinin ortalamasi tapilir 2ye bolunur
// imtahan bali 2ye bolunur
// her iki netice toplanir final bal 50den yuxaridirsa kecir eks halda kesilir


// var mark1 = 78;
// var mark2 = 78;
// var mark3 = 78;
// var examMark = 78;

// if (
//     mark1>=0&&mark1<=100&&
//     mark2>=0&&mark2<=100&&
//     mark3>=0&&mark3<=100&&
//     examMark>=0&&examMark<=100
//     ) {

//         if ((((mark1+mark2+mark3)/3)+examMark)/2>50) {
//             console.log("pass")
//         }
//         else{
//             console.log("fail")
//         }

// }else{
//     console.log("error")
// }


// var names = ["Nicat","Murad","Ismayil","Memed","Samir"];

// for (var index = 0; index < names.length; index++) {
//     console.log(names[index]);
// }



// var marks = [12,13,12,1,41,35,53];
// var examMark = 78;

// var marksAreCorrect = true;
// var average = 0;
// var totalMarks = 0;

// for (let i = 0; i < marks.length; i++) {
//     if (!(marks[i]>=0 && marks[i]<=100)) {
//         marksAreCorrect = false;
//     }
// }


// if (marksAreCorrect&&examMark>=0&&examMark<=100) {

//     for (var i = 0; i < marks.length; i++) {
//         totalMarks+=marks[i];
//     }

//     average = totalMarks/marks.length;
//     console.log((average + examMark)/2)
//     if ((average + examMark)/2>50) {
//         console.log("kecdin");
//     }
//     else{
//         console.log("kesildin");
//     }

// }else{
//     console.log("error")
// }


//iki eded verilir bu ededler
//arasindaki ededlerin cemi hesablanir.

// var downLimit=5;
// var upperLimit=6;
// var result = 0;

// if (upperLimit>downLimit) {
//     downLimit++;

//     while (downLimit<upperLimit) {
//         result+=downLimit;
//         downLimit++;
//     }

//     console.log(result)
// }
// else{
//     console.log("error")
// }


// var student1 = {
//     name: "Bashir",
//     surname: "Azizov",
//     age: 42,
// }

// var student2 = {
//     name: "Ismayil",
//     surname: "Aliyev",
//     age: 29,
// }

// var student3 = {
//     name: "Mamed",
//     surname: "Aliyev",
//     age: 18,
// }

// var students = [student1,student2,student3];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].age) 
// }