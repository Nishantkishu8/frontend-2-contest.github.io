/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
   arr.map(a => {
      if (a.marks > 50) {
       console.log(a);
      }
    });
  }

function PrintStudentsbyForEach() {
  arr.forEach(a => {
      if (a.marks > 50) {
        console.log(a);
      }
    });
  //Write your code here , just console.log
}

function addData() {
   let newArr = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newArr);
    console.log(arr);
  //Write your code here, just console.log
}

function removeFailedStudent() {
  let filteredArr = arr.filter(a => a.marks >= 50);
    console.log(filteredArr);
  //Write your code here, just console.log
}

function concatenateArray() {
  let arr1 = [
      { id: 7, name: "Umesh bhai", age: "20", marks: 85 },
      { id: 9, name: "Aman rock", age: "20", marks: 85 },
      { id: 11, name: "panther", age: "20", marks: 85 },
    ];
    let all = arr.concat(arr1);
  
  console.log(all)
  //Write your code here, just console.log
}
