//const students ={name: "Thando", mark: "30"};
//const students = {name}


//var args_string = JSON.stringify(obj);
//console.log(args_string);
//
var list =[
{name: "John", marks:30},
 {name: "Kuhle", marks:59},
{name: "Sizwe", marks:40},
{name: "Atli", marks:36},
{name: "Angel", marks:50},
{name: "Nozie", marks:89},

];
console.log(student);

//Display students names
var arr = [ "John", "Kuhle", "Sizwe", "Atli", "Angel", "Nozie"];

var myString = JSON.stringify(arr);
console.log(arr);


//Calculate average of students
var arr = [{ name: "John", Marks: "30" }, { name: "Clie", marks: "59" }, { name: "Sizwe", Marks: "40" }, { name: "Atli", score: "36" }, { name: "Nozie", score: "89" }],
    avgScore = arr.reduce(function (r, person) {
        if (person.name === "Atli") {
            r.sum += +person.score;
            r.avg = r.sum / ++r.count;
        }
        return r;
    }, { sum: 0, count: 0, avg: 0 }).avg;

console.log(avgScore);


//Get top achieve
//


//Two top students
