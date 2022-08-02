let main = document.getElementById("main_title")
let title = document.getElementById("title_input")
let noun = document.getElementById("noun")
let verb = document.getElementById("verb")
let adj = document.getElementById("adjective")
let submitBtn = document.getElementById("submit_button")
let story = document.getElementById("story_result")
let form =  document.querySelector(".form_container")

title.onkeyup = function(event){
    event.preventDefault()
    main.innerHTML= title.value
}

submitBtn.onclick = function(event){
    event.preventDefault()
    if (title.value==""||noun.value==""||verb.value==""||adj.value==""){
        alert("Please fill in all fields")
    } else {
        form.style.display = "none"
        story.innerHTML = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adj.value + " day!"
    }
    
}

