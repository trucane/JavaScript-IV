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

    sprintChallenge(subject){
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

    debugCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Student({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    favSubjects:['PHP', 'React-Native']
  });

  const barney = new Student({
    name: 'Barney',
    age: 35,
    location: 'Acroos the street from Fred',
    favSubjects:['Node.JS', '.NET']
  });

  const dan = new Instructor({
    name: 'Mr. James',
    age: 42,
    location: 'Bedrock',
    specialty: 'Cats',
    favLanguage: 'React',
    catchPhrase:'Dont Cat-cha cold'
  });

  const aman = new ProjectManager({
    name: 'Aman',
    age: 33,
    location: 'Lambda',
    specialty: 'Patience',
    favLanguage: 'React',
    catchPhrase:'Thats\'s awesome',
    gradClassName: 'I\'m awesome',
    favInstructor: 'I think I am pretty good if I do say so myself'
  });

  console.log(fred.speak());
  console.log(aman.catchPhrase)
  console.log(fred.graduate());
  console.log(dan.demo('javascript'));
  console.log(dan.grade(fred, 'CSS Fundamentals'));
  console.log(fred.grade);
  console.log(aman.score(fred));
  console.log(fred.listSubjects());
  console.log(barney.PRAssignment('Javascript II'));
  console.log(barney.sprintChallenge('Advanced CSS'));
  console.log(aman.standUp('Web_20_Holla_Holla'));
  console.log(aman.debugCode(barney, 'Preprocessing II'));

