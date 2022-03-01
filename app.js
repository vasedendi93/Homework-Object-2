console.log("Object part 3");

//CLASSES IN JAVASCRIPT

class Vechile{
    constructor(id,name,batchNo,price){
        this.id=id;
        this.name=name;
        this.batch=batchNo;
        this.price=price;
    }

    printVechile(){
        console.log(`${this.id} . ${this.name} | Batch: ${this.batch} Price : ${this.price}`);

    
    }
};


let boat = new Vechile(495,"Boat","#534512355","8500000$");
console.log(boat);

boat.printVechile();

// Inheritance with classes 


class WheeledVechile extends Vechile{
    constructor(id,name,batchNo,price,wheels){
        super(id,name,batchNo,price)
        this.wheels=wheels;
    }
    driveVechile(){
        console.log(`We are driving a ${this.name} vechile with ${this.wheels} wheels`);

    }
};

let bike = new WheeledVechile(3,"Bike","#2345235",250,2);

console.log(bike);
bike.printVechile();
bike.driveVechile();


console.log(Object.getPrototypeOf(bike));


class Car extends WheeledVechile {
    constructor(id,name,batchNo,price,doors,ac){
        super(id,name,batchNo,price,4)
        this.doors = doors;
        this.airCon = ac;
         // (ac === true ) === if(ac)
         // (ac === false) === if(!ac)
        if(ac) this.price += 400;
    }

    buyCar(money){
        if(money >= this.price){ 
            console.log(`Congrats , you purchase ${this.name} car.`)
        }else if(money< this.price){
            console.log(`You will need ${this.price - money} more to purchase this car.`)
        }
    }


    static addAirCon(car){
        if(!car.airCon){
            car.airCon = true;
            car.price += 400;
            console.log(`Your car has AC now , now will cost ${car.price}`)
        }else{
            console.log(`Your car already have AC`);
        }
    }

};


let carOne = new Car(553,"Audi","#44444",50000,3,true);
console.log(carOne);
carOne.printVechile();
carOne.driveVechile();
carOne.buyCar(50000);
console.log(Object.getPrototypeOf(carOne));

let carTwo = new Car(443,"Yugo","#4324234",500,3,false);
console.log(carTwo);
carTwo.buyCar(800)
Car.addAirCon(carTwo);
carTwo.buyCar(800);


// HOMEWORK================================================================================================================================


class Personclass{
    constructor(firstName,lastName,age,){
        this.firstName = firstName;
        this.lastName = lastName
        this.age =age;
    }
    getFullName(){
        console.log(`Full name is ${this.firstName} ${this.lastName} `)
    }
}


let vasePerson = new Personclass("Vase","Petrusevski",19);

console.log(vasePerson);
vasePerson.getFullName();


class StudentClass extends Personclass{
    constructor(firstName,lastName,age,academyName,studentId){
        super(firstName,lastName,age)
        this.academyName = academyName;
        this.studentId= studentId;
    }

    study(){
        console.log(`The student ${this.firstName} is styding in the ${this.academyName}`);
    }
    academyStudent(student){
        this.firstName= student;
        return console.log(`${this.firstName} + ${this.academyName}`);
    }

}

let vaseStudentClass = new StudentClass("Vase","Petrusevski",19,"SEDC","#444");

console.log(vaseStudentClass);
vaseStudentClass.study();
vaseStudentClass.academyStudent(vaseStudentClass.firstName);




// Part  2 

class DesignStudent extends StudentClass {
    constructor(firstName,lastName,age,academyName,studentId,isStudentOfTheMonth){
        super(firstName,lastName,age,academyName,studentId);
        this.isStudentOfTheMonth = isStudentOfTheMonth;
    }
    attemdAdobeExam(){
        console.log(`The student ${this.firstName} is doing an adobe exam !`)
    }
}

let vaseDesignStudent = new DesignStudent("Vase","Petrusevski",19,"SEDC","#444",true);

console.log(vaseDesignStudent);
vaseDesignStudent.attemdAdobeExam();


class CodeStudent extends DesignStudent {
    constructor(firstName,lastName,age,academyName,studentId,isStudentOfTheMonth,hasInvidualProject,hasGroupProject){
        super(firstName,lastName,age,academyName,studentId,isStudentOfTheMonth) 
        this.hasInvidualProject=hasInvidualProject;
        this.hasGroupProject=hasGroupProject;
    }
    doProject(type){
        if(type === "individual"){
            this.hasGroupProject = false;
            this.hasIndividualProject = true;
        }else if(type === "group"){
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        }else{alert("Incorrect input")};
    }
};

let vaseCodeStudent = new CodeStudent("Vase","Petrusevski",19,"Sedc","#4454",true,true);

vaseCodeStudent.doProject("individual");



class NetworkStudent extends CodeStudent{
    constructor(firstName,lastName,age,academyPart,academyName){
        super(firstName,lastName,age,academyName)
        this.academyPart = academyPart;
    }
    attendCiscoExam(){
        console.log(`The student ${this.firstName} is doing a cico exam!`)
    }
}

let vaseNetworkStudent = new NetworkStudent("Vase","Petrusevski",19,5,"SEDC",);
console.log(vaseNetworkStudent);
vaseNetworkStudent.attendCiscoExam();
vaseNetworkStudent.academyStudent(vaseNetworkStudent.firstName);
vaseDesignStudent.academyStudent(vaseStudentClass.firstName);
vaseCodeStudent.academyStudent(vaseCodeStudent.firstName);


