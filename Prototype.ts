console.log("function constructor used...")

function student (id:number , name:string) {
    this.id = id;
    this.name = name;
}

var stu = new student (1 , "Krupa")
student.prototype.email = "krupa25399@gmail.com"

console.log(stu.id)
console.log(stu.name)
console.log(stu.email)