// CODE here for your Lambda Classes

class Person {
    constructor({name, age, location}){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor ({specialty, favLanguage, catchPhrase, ...attr}){
        super(attr);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }

    score(student){
        const operator = Math.floor(Math.random() * Math.floor(2));
        let value = Math.floor(Math.random() * Math.floor(20));

        return (operator === 1)? value  =  student.grade + value: value  =  student.grade - value;
        

    }
}

class Student extends Person{
    constructor({className, previousBackground, favSubjects, grade = 75, ...attr}){
        super(attr);
        this.className = className;
        this.previousBackground = previousBackground;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }

    listSubjects(){
        return(this.favSubjects);
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(){
        return (this.grade > 70) ? "YAY! You graduated! Welcome to Lambda Alumni": "You failed! Try Nursing";
    }
}


class ProjectManager extends Instructor{
    constructor({gradClassName, favInstructor, ...attr}){
        super(attr);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugCode(student){
        return `${this.name} debugs ${student.name}'s code on ${student.subject}`
    }
}

const fred = new Student({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

  const james = new Instructor({
    name: 'Mr. James',
    age: 42,
    location: 'Bedrock'
  });

  const Sir = new ProjectManager({
    name: 'Aman',
    age: 33,
    location: 'Lambda'
  });

  console.log(fred.speak());
  console.log(fred.graduate());
