//part 1
function elementSelector (x)   {
    let selection = document.querySelector(x)
    return selection
}
console.log(elementSelector(/*insert html element between quotes here*/))

// Alternatively, if I'm to follow your words exactly;
// "... a function that selects a single element and logs it to the console"
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
