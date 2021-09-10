let theAddButton = document.querySelector(".button"),
    theInput = document.querySelector(".task"),
    tasksContainer = document.querySelector(".list"),
    noTasksMg = document.querySelector(".no-tasks-message"),
    taskCount = document.querySelector(".tasks-count span"),
    tasksCompleted = document.querySelector(".tasks-completed span");

    window.onload = function () {
        theInput.focus();
      };
      
      // Adding The Task
      theAddButton.onclick = function() {// If Input is Empty
        
        if (theInput.value.trim() === '') {
      
          console.log("No Value");
      
        }
         else {
      
          let noTasksMsg = document.querySelector(".no-tasks-message");
      
          // Check If Span With No Tasks Message Is Exist
          if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      
            // Remove No Tasks Message
            noTasksMsg.remove();
      
          }
          // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");
        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);
        // Create The Delete Button Text
         let deleteText = document.createTextNode("X");
         // Add Text To Main Span
            mainSpan.appendChild(text);

            // Add Class To Main Span
            mainSpan.className = 'li';

            // Add Text To Delete Button
            deleteElement.appendChild(deleteText);
            // Add Class To Delete Button
            deleteElement.className = 'delete';
            // Add Delete Button To Main Span
            mainSpan.appendChild(deleteElement);

            // Add The Task To The Container
            tasksContainer.appendChild(mainSpan);
            // Empty The Input
            theInput.value = '';

            // Focus On Field
            theInput.focus();
            // Calculate Tasks
            calculateTasks();

        }
    };
    document.addEventListener('click', function (e) {

        // Delete Task
        if (e.target.className == 'delete') {
      
          // Remove Current Task
          e.target.parentNode.remove();
      
          // Check Number Of Tasks Inside The Container
          if (tasksContainer.childElementCount == 0) {
      
            createNoTasks();
      
          }
      
        }
        // Finish Task
        if (e.target.classList.contains('li')) {

            // Toggle Class 'finished'
            e.target.classList.toggle("finished");

        }
        // Calculate Tasks
            calculateTasks();
    });
    // Function To Create No Tasks Message
        function createNoTasks() {

            // Create Message Span Element
            let msgSpan = document.createElement("span");
        
            // Create The Text Message
            let msgText = document.createTextNode("No Tasks To Show");
        
            // Add Text To Message Span Element
            msgSpan.appendChild(msgText);
        
            // Add Class To Message Span
            msgSpan.className = 'no-tasks-message';
        
            // Append The Message Span Element To The Task Container
            tasksContainer.appendChild(msgSpan);
        
        }
    // Function To Calculate Tasks
        function calculateTasks() {

            // Calculate All Tasks
            taskCount.innerHTML = document.querySelectorAll('.list .li').length;
        
            // Calculate Completed Tasks
            tasksCompleted.innerHTML = document.querySelectorAll('.list .finished').length;
        
        }
  



/**

//document.getElementById("liveToastBtn").addEventListener("click", myFunction)

function myFunction() {
  
  
  addItem()
  
}
function addItem() {
    //let  valueText = document.getElementById("task").value.trim();

        if(valueText === "") {
            alert("My input has No value!");

        }
        else {
            const li = document.createElement("li");
            const node = document.createTextNode(valueText);
            li.appendChild(node);
            const element = document.getElementById("list");
            element.appendChild(li);
        }
    

let Item = document.getElementsByTagName('li');
Item.addEventListener('click', removItem() )
    function removItem(){
        let menu = document.getElementById('list');
        menu.removeChild(menu.childNodes);
    }
       
    **/
