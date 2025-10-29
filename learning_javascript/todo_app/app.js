document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.querySelector('#userInput');
    const form = document.querySelector('form.input-container');
    const unorderedListContainer = document.querySelector('#unorderedListContainer');
    const body = document.querySelector('body');
    const todoOverallContainer = document.querySelector('.todo-overall-container');

    form.addEventListener('submit', function() {
        event.preventDefault(); // Prevents page refres
        userInput.focus();
        const userEnteredTask = userInput.value;
        if(userEnteredTask){
            const todoItem = createTodoItem(userEnteredTask);
            unorderedListContainer.appendChild(todoItem);
        }
    });

    function createTodoItem(todo) {
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');
        
        const listItem = document.createElement('li');
        listItem.classList.add('each-todo-item');
        listItem.textContent = todo;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        todoItemContainer.appendChild(listItem);
        todoItemContainer.appendChild(deleteButton);

        userInput.value = "";

        deleteButton.addEventListener('click', function() {
            todoItemContainer.parentNode.removeChild(todoItemContainer);
        })

        return todoItemContainer;
    }

    body.addEventListener('click', function(){
        //innerHTML will gives the html content of the element
        // This will clear the input field when clicking outside the todo list
        unorderedListContainer.innerHTML = "";
    })

    todoOverallContainer.addEventListener('click',function(event){
        event.stopPropagation(); // Prevents the event from bubbling up to the body
    })
});


//when working with forms, always use the submit event
//when we use buttons, they are individually clickable but when we use forms, we can submit the form using the enter key
//when we use buttons, and click the enter key the form action attribute will trigger the url
//when we use forms with submit buttons, the entered form details will be send along with the form.

//*while submitting form use event.preventDefault() to prevent the page from refreshing

//*Event Bubbling: when an event occurs on an element, it will also occur on its parent elements. This is called bubbling.
//for example, if we click on submit button event, it will also trigger the submit event on the form element.

//*DOMContentLoaded: This event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. It is a good place to put your JavaScript code that manipulates the DOM.
//use load event to wait for the entire page to load, including stylesheets, images, and subframes. This is useful when you want to ensure that all resources are available before executing your script.