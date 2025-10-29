//getElemetById is used to access the element by its id
const mainHeaderElement = document.getElementById('1');
console.log(mainHeaderElement);
mainHeaderElement.style.color = 'red';

//if we want to access the node using class name
const headerElement = document.querySelector('.headerElement');
console.log(headerElement);

for (let i = 0; i < 3; i++) {
    const paraElement = document.createElement('p'); //create a new element
    paraElement.textContent = `This is paragraph number ${i + 1}`; //set the text content of the new element
    paraElement.className = 'paraElement';
    document.body.appendChild(paraElement); //append the new element to the body
}

//if we want to acces all nodes
const allParaElements = document.querySelectorAll('.paraElement');
console.log(allParaElements);

const examplePara = document.createElement('p');
examplePara.textContent = 'This is an example paragraph.';
examplePara.className = 'examplePara';
examplePara.id = 'exampleParaId';
document.body.appendChild(examplePara); //append the new element to the body

//*Modify the DOM
const buttonElement = document.querySelector(".buttonOne");
buttonElement.style.backgroundColor = 'green';
buttonElement.style.color = 'white';

buttonElement.setAttribute('padding', '10px');
buttonElement.removeAttribute('padding'); //remove the padding attribute


//*clasList
const paraElementTwo = document.createElement('p');
paraElementTwo.textContent = 'This is another paragraph.';
paraElementTwo.classList.add('para-element-two');
document.body.appendChild(paraElementTwo); //append the new element to the body

console.log(paraElementTwo.classList);
paraElementTwo.classList.add('para-element-two-more-details'); //we can also add multiple classes
paraElementTwo.classList.toggle('para-element-two-toggle'); //toggle the class
paraElementTwo.classList.contains('para-element-two'); //check if the class exists
paraElementTwo.classList.remove('para-element-two'); //remove the class

//*Create operation

const anotherParaNode = document.querySelector('para-element-two');

const newParaElement = document.createElement('p');
newParaElement.textContent = 'This is a newly created paragraph.';
newParaElement.classList.add('para-element-two-more-details');

document.body.appendChild(newParaElement); //append the new element to the body
document.body.insertBefore(newParaElement, anotherParaNode); //insert the new element before anotherParaNode

//*Delete operation
const newPara = document.createElement('p'); //create a new element
newPara.textContent = 'This paragraph will be deleted.';
document.body.appendChild(newPara); //append the new element to the body

document.body.removeChild(newPara);

