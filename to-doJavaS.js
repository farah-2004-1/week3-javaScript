
const inputBox= document.getElementById("input-box") ;
const listcontenar= document.getElementById("list-container") ;
function addTask(){
    if (inputBox.value === ''){
        alert("you must write something !");
     }   
     else{
            let li =document.createElement("li");
            li.innerHTML= inputBox.value;
            listcontenar.appendChild(li);
            let span= document.createElement('span');
            span.innerHTML="\u00d7";
            li.appendChild(span);

        }
        inputBox.value= "";
         saveData();
}
listcontenar.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
         saveData();

    }

} ,false);
function saveData(){
    localStorage.setItem("data", listcontenar.innerHTML)
}
function showTask(){
    listcontenar.innerHTML= localStorage.getItem("data");

}
showTask();
