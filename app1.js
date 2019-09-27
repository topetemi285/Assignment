
var students=[
    {
        name:"peter",
        level:100,
        grade:60,
        age:22,
        gender:"male"
    },
    {
        name:"peter",
        level:100,
        grade:60,
        age:22,
        gender:"male"
    },
    {
        name:"peter",
        level:100,
        grade:60,
        age:22,
        gender:"male"
    }
    ,
    {
        name:"peter",
        level:100,
        grade:60,
        age:22,
        gender:"male"
    }
    
];


var table =  document.getElementById("table");
var Thead = () =>{
    var thead1 = document.createElement("thead");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    th1.innerHTML="NAMES";
    th2.innerHTML="LEVELS";
    th3.innerHTML="GRADES";
    th4.innerHTML="AGE";
    th5.innerHTML="GENDER";
    thead1.append(th1,th2,th3,th4,th5);
    table.appendChild(thead1);


    
}


//var table =  document.getElementById("table");
var creatTable = () =>{
    Thead();
   //var table =  document.getElementById("table");
    //tr.innerHTML = "";
    students.forEach((student)=>{
      //  var th = document.getElementById("th")
        //th.innerHTML=student.names;
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.style.textAlign = "center";
        td1.style.backgroundColor = "red";
        td1.style.color = "white";
        td1.innerHTML=student.name;
        var td2 = document.createElement("td");
        td2.style.textAlign = "center";
        td2.style.backgroundColor = "green";
        td2.innerHTML=student.level;
        var td3 = document.createElement("td");
        td3.style.textAlign = "center";
        td3.style.backgroundColor = "yellow";
        td3.innerHTML=student.grade;
        var td4 = document.createElement("td");
        td4.style.textAlign = "center";
        td4.style.backgroundColor = "green";
        td4.innerHTML=student.age;
        var td5 = document.createElement("td");
        td5.style.textAlign = "center";
        td5.style.backgroundColor = "black";
        td5.style.color= "white";
        td5.innerHTML=student.gender;
        tr.append(td1,td2,td3,td4,td5);
            table.appendChild(tr);
    })

}

creatTable();
var Name = document.getElementById("name");
var level = document.getElementById("level");
var grade = document.getElementById("grade");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
console.log(students)

document.getElementById("btn").addEventListener("click", () =>{
 //console.log(Name.value, level.value, grade.value, age.value, gender.value);
 table.innerHTML="";
    var student = {
     name:Name.value,
     level:level.value,
     grade:grade.value,
     age:age.value,
     gender:gender.value
  };
  students.push(student);
console.log(students);
  creatTable();
})