1. Imagine you are writing a "to do" list application. Create a class named task
 which has the following features: owner of the task,
task description, a variable which represents whether the task is completed or
not, and created date (set at runtime based on when the
  Task object is created). Make sure your constructor is such that it can receive
   two values only (and use default parameters for the other two).
  Use ES6 class Syntax

class Task {
  constructor(ownr,desc) {
    this.ownr = owner;
    this.desc = description;

  }
  if Task = this.ownr + this.desc{
    alert ("Let's get started!")
  }
  else {
    alert("please make sure to fill out all fields...")
  }
  var setTime =
};

2. Add a method to your Task class which toggles the state of the "completed" variable.
If the Task is already completed, this method should set
 the value of "completed" to false, and vice versa. Use ES6 class Syntax, include only
  the finished version of the Task class in your submission

Task.prototype.completed = function() {
  if (this.ownr + this.desc)
  return true;

  return false;
}

3. Imagine you are writing a Gradebook program. Create a class named Student
which encapsulates the following data: student first name, student last name student ID.
You may use pseudoclassical or ES6 syntax.

class Student {
  constructor(fn,ln,stID) {
    this.fn = First Name;
    this.ln = Last Name;
    this.stID = Student ID;
  }
}

4. Still within the context of the Gradebook program, create a class named Assignment
which encapsulates the following
data: a student ID, a url link to the assignment submission, an assignment type
(homework, classwork, etc), and a grade.
You may use pseudoclassical or ES6 syntax.

class Assignment {
  constructor(stID,url,homework) {
    this.id = student id;
    this.url = url link;
    this.asgntype = type of assignment;
  }
}

5. Once again, within the context of the gradebook program, create a class named
 Gradebook which encapsulates the following data: A course code, a course ID, an
  instructor name, and an array of Assignment objects. The array should be initialized
  to be empty. Use ES6 class Syntax, include only the finished version of the Gradebook
  class in your submission

  class Gradebook {
    constructor(cc,cid,in,) {
      this.cc = course code;
      this.cid = course ID;
      this.in = instructor name;
      Assignment objects = [];
    }
  }

6. Add an instance method to your Gradebook class which is called addAssignment
and receives an assignment parameter, then adds it to the Gradebooks internal array
which stores Assignments.

addAssignment() {
  return.this.homework+this.url+this.stID = function() {
    this.Gradebook();
  };
}

7. Add an instance method to your Gradebook class which is called getAverage.
This method should use reduce to get the average score for the Assignments in the Array.
Assume equal weight for all assignments.

getAverage(assignment objects) {
  [i].reduce(function() {
    return assignment objects []++ / arr.length;
  })
}

8. what is node.js?
Node.js is a framework used to develope server-side Web applications in JavaScript.

9. What is an example of the usage of an http session? In other words,
what are http sessions for?

http sessions are used to identify users across various page request or visits to
a Web site and is used to store information about the user.
 
