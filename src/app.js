//PLEASE READ THE COMMENTS!
//THEY ARE IMPORTANT TO UNDERSTADNING MY THOUGHT PROCESS
//ON AT LEAST PART 2.
//THEY WILL CLEAR UP ANY CONFUSION YOU MAY HAVE REGARDING IT

//part 2
function elementSelector (inputElement)   {
    let selection = document.querySelector(inputElement)
    return(selection)
}
console.log(elementSelector("footer"))

//I'm logging footer for demonstation purposes,but it's pretty obvious
//that you could replace that with any other element on the page

// Alternatively, if I'm to follow your words exactly;
// "...a function that selects a single element and logs it to the console"
// I would create a different function: A function that includes the log
// inside the function instead of requiring it later on. 
// That alternative function is below:

function elementSelectorAlt (inputElementAlt) {
    console.log(document.querySelector(inputElementAlt))
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
            studentsScholarship.push({"name": item.name, "gradeAvg": avgGrade})
        }
    }
    return(studentsScholarship)
}

console.log(honorsChecker(students))

//I tried to split this function multiple times in multiple different places.
//I admit that I don't know how I'm supposed to adapt this into more than one function.
//I assume that I'm probably required to create an entirely new set of code, rather than
//adapting old code. But I can' think of any other logic to use to get the desired result.

//part 4
function darkMode ()    {
    const selectedDiv = document.querySelector(".container")
    selectedDiv.classList.replace("light-theme", "dark-theme")
    return
}

darkMode()