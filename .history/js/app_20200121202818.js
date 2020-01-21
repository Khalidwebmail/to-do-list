/**
 * Select element
 */

 const clear = document.getElementById("clear");
 const dateElement = document.getElementById("date");
 const list = document.getElementById("list");
 const input = document.getElementById("input");

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

  function addToDo(toDo) {

  }