//part 2
function elementSelector (x)   {
    let selection = document.querySelector(x)
    return selection
}
console.log(elementSelector(/*insert html element between quotes here*/))

// Alternatively, if I'm to follow your words exactly;
// "...a function that selects a single element and logs it to the console"
// I would create a different function: A function that includes the log
// inside the function instead of requiring it later on. 
// That alternative function is below:

function elementSelectorAlt (y) {
    console.log(document.querySelector(y))
    return
}

// last thing to note: this alternative function does not return a version
// of the selection that can be called later. That can be easily changed
// by re-adding the "let selectionAlt = document.querySelector(y)", and
// then altering the return line to say "return selectionAlt"

//part3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
function honorsChecker (x)  {
    const studentsScholarship = []
    for (let item of x)   {
        let gradeSum = 0
        for (let grade of item.grades)    {
        gradeSum += grade
        }
        let numOfGrades = item.grades.length
        let avgGrade = gradeSum / numOfGrades
        if (avgGrade >= 80)   {
            studentsScholarship.push(
                {"name": item.name, "gradeAvg": avgGrade})
        
        }
    }
    return(studentsScholarship)
}
  
console.log(honorsChecker(students))
