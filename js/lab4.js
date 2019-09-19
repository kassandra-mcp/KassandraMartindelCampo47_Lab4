//ADD BUTTON
let submit = document.getElementById("posttodo");
submit.addEventListener("click", (event) => 
{
    event.preventDefault();
    let textarea = document.getElementById("InValue");
    let textinput = textarea.value;
    let errorp = document.getElementById("error");
    
    if (textinput === "") 
    {
    	errorp.textContent = "Please wtite something";
    }
    else
    {
    	errorp.textContent = "";

	    let mydiv = document.createElement("div");		/*<div>*/
	    mydiv.className = "gettodolist";

	    let input = document.createElement("input");	/*<input>*/
	    input.className = "checkclass";
	    input.type = "checkbox";
	    mydiv.appendChild(input);							/*Append <input> a <div>*/

	    let span = document.createElement("span");		/*<span>*/
	    let t = document.createTextNode(" "+ textinput);		/*Text Node*/
	    span.appendChild(t);							/*Append the text to <span>*/
	    mydiv.appendChild(span);							/*Append <span> to <div>*/
	    textarea.value = "";							/*Reset text area*/
	    
	    let complete = document.getElementById("todolist");
	    complete.append(mydiv);
    }

    
});

//CLEAR BUTTON
let clear = document.getElementById("clearbutton");
clear.addEventListener("click", (event) => 
{
    event.preventDefault();
    let checkval = document.getElementsByClassName("checkclass");

    for (i = 0; i < checkval.length; i++)
    {
    	checkval[i].checked = false ;
    }
});

//MARK ALL BUTTON
let markall = document.getElementById("markbutton");
markall.addEventListener("click", (event) => 
{
    event.preventDefault();
    let checkval = document.getElementsByClassName("checkclass");
    for (i = 0; i < checkval.length; i++)
    {
    	checkval[i].checked = true ;
    }
});

//DELETE BUTTON
let deleteall = document.getElementById("deletebutton");
deleteall.addEventListener("click", (event) => 
{
    event.preventDefault();
    let getlist = document.getElementsByClassName("gettodolist");
    do
    {
    	for (i = 0; i < getlist.length; i++)
	    {
	    	getlist[0].remove();
	    } 
    } while(getlist.length != 0)  
});