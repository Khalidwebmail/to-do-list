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
  * Class name
  */
const CHECK = "fa-check-circle";
const UNCHECK = "fa-check-thin";
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
            addToDo(toDo)
        }

        LIST.push({
            name : toDo,
            id: id,
            done: false,
            trash: false
        })
    }
})

addToDo("COffee",1, false, true);