var ITsudentsINFO = [
    {name:"Asalu Temitope Peter", age:21, address :"Bauchi Ring Road jos", tribe:"yagba",gender:"male",height:1.7,department:"Computer Science",level:300,grade:[10,20,30,40,50,60,70,80,90]
},
{name:"Sunday Josephine", age:23, address :"Odus", tribe:"Eggon",gender:"female",height:1.7,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Oyekale Alice Tosin", age:16, address :"Faringada", tribe:"Yoruba",gender:"female",height:1.6,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Kaslong Kelvin", age:22, address :"Tudun wada", tribe:"shendam",gender:"male",height:1.6,department:"Computer Science",level:300,grade:[50,20,40,50,40,40,10,20,100]},
{name:"Adams Mark", age:21, address :"Abbatoir", tribe:"Idoma",gender:"male",height:1.74,department:"Computer Science",level:300,grade:[45,76,23,50,10,30,50,20,100]},
{name:"Elizabeth John", age:13, address :"Salama Hostel", tribe:"Ibibo",gender:"female",height:1.65,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Susan Owoicho", age:25, address :"Salam Hostel", tribe:"Idoma",gender:"female",height:1.72,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Yada Martins", age:28, address :"Odus", tribe:"Kagoro",gender:"male",height:1.76,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Ifeoma Ibedu", age:25, address :"Angwan Rukuba", tribe:"Igbo",gender:"female",height:1.68,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Awari Yohanna Dauda", age:23, address :"Angwan Rukuba", tribe:"Afizare",gender:"male",height:1.64,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Nanbal Moses Kundam", age:23, address :"Federal Locust", tribe:"Mupun",gender:"male",height:1.61,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Victoria Bok", age:22, address :"Odus", tribe:"Berom",gender:"female",height:1.61,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Yusuf Paul Osanga", age:30, address :"Rayfield", tribe:"Berom",gender:"male",height:1.74,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Bamigboye Christiana Temitope", age:25, address :"Village Hostel", tribe:"Yoruba",gender:"female",height:1.69,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Job Gift Elejo", age:22, address :"Village Hostel", tribe:"Igala",gender:"female",height:1.72,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Moses Deborah Kibba", age:24, address :"Odus", tribe:"Amo",gender:"female",height:1.65,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Joy Ohue Osedebamen", age:24, address :"Odus", tribe:"Idoma",gender:"female",height:1.69,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Ponfa Michael", age:24, address :"Odus", tribe:"Berom",gender:"male",height:1.65,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Mabas Maryam", age:20, address :"PTS, Jos", tribe:"challa",gender:"female",height:1.68,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
{name:"Uzaifat Ibrahim", age:23, address :"Dod Strret Jos", tribe:"Magwavul",gender:"male",height:1.69,department:"Computer Science",level:300,grade:[60,230,80,90,10,30,50,20,100]},
];
n=0;
var average1=ITsudentsINFO.filter(function(values){
if(n<values.height)
{
    n=values.height;
}
});

var answer=ITsudentsINFO.filter(function(index)
{
    if(index.height==n)
    {
        return index;
    }
});
console.log("tallest");
console.log(answer);
console.log("\n");
function maxAverage(arr)
{
    var number=0;
    for(var i=0; i<arr.length; i++)
    {
        number = number + arr[i];
    }
        return number/arr.length;
}
var bit = 0;
var m;
ITsudentsINFO.forEach(function(x,i,index)
{
    if(bit < maxAverage(x.grade)){
        bit= maxAverage(x.grade);
       m = i;
    }
});
console.log("the student with the heighest height is");
console.log(ITsudentsINFO[m]);