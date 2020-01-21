/**
 * Select element
 */

const clear = document.getElementById("clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
/**
 * Variable
 */
let LIST, id;
/**
 * get from local storage
 */

 localStorage.setItem("TODO", JSON.stringify(LIST));
 /**
  * add to local storage
  */


 /**
  * Class name
  */
 const CHECK = "fa-check-circle";
 const UNCHECK = "fa-circle-thin";
 const LINE_THROUGH = "lineThrough";

 /**
  * Show todays date
  */
const options = {weekday : "long", month : "short", day : "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

 /**
  * add to do function
  */

function addToDo(toDo, id, done, trash){

if(trash) { return; }

const DONE = done ? CHECK : UNCHECK;
const LINE = done ? LINE_THROUGH : "";

const item = `<li class="item">
                <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
            </li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}
  /**
   * Add item to list
   */
document.addEventListener("keyup", function(e) {
    if(event.keyCode == 13) {
    const toDo = input.value;

    if(toDo) {
        addToDo(toDo, id, false, false)

        LIST.push({
                name : toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});

/**
 * Complete to
 */
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

/**
 * remove todo
 */
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

/**
 * Traget item created dynamically 
 * */

list.addEventListener("click", function(event) {
    const element = event.target; //return clicked element inside list
    const elementJob = element.attributes.job.value; //complete or delete

    if(elementJob == "complete") {
        completeToDo(element);
    } 
    else if(elementJob == "delete") {
        removeToDo(element);
    }
});