let mainCotainerEl = document.getElementById("mainContainer");
mainCotainerEl.classList.add("text-center","m-5")


let array =[
    {
        text:"HTML",
        id:1
    },
    {
        text:"CSS",
        id:2
    },
    {
        text:"Js",
        id:3
    },
]

function onchnageStatus(label){
    let labelEls = document.getElementById(label);
    
    labelEls.classList.toggle("checked")

}

function createAndAppend(todo){
    let label = "label" + todo.id;
    let checkbox = "checkbox" +todo.id;
   

    let unorderList = document.createElement("ul");
    mainCotainerEl.appendChild(unorderList);

    let listEl = document.createElement("li");
    listEl.classList.add("list")
    unorderList.appendChild(listEl);


    let inputEl = document.createElement("input");
    inputEl.type="checkbox";
    inputEl.id=checkbox;
    inputEl.onclick =function(){
        onchnageStatus(label)
    }
    listEl.appendChild(inputEl);
    
    

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for",checkbox);
    labelEl.textContent = todo.text;
    labelEl.id=label;
    labelEl.classList.add("ml-3")
    listEl.appendChild(labelEl)

}

for(let todo of array){
    createAndAppend(todo)
}






