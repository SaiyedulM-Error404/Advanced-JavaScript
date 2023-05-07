let studentInfo = [
    {id:21, name:"Omor Sani"},
    {id:22, name:"Mannnna"},
    {id:23, name:"Moyuri"},
    {id:24, name:"Deepjol"}

];
let studentName =[];
for (let i = 0; i < ; i++) {
    const element = studentInfo[i];
    console.log(element);
}
for (let i = 0; i < studentInfo.length; i++) {
    const element = studentInfo[i];
    console.log(element);
}

let name = studentInfo.map(s => s.name);
let ids = studentInfo.map(id => id.id);
let bigIds = studentInfo.filter(s => s.id >22);
let finds = studentInfo.find(s => s.id >23);
console.log(finds);
console.log(bigIds);
console.log(name,ids);