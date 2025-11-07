document.addEventListener('DOMContentLoaded',() => {
    const helpTextElement = document.querySelector('#help-text');

    const helpText = [
        {
            id: 'home',
            text: 'Welcome to home page!!'
        },
        {
            id: 'about',
            text: 'More about us!!'
        },
        {
            id: 'contact',
            text: 'Please contact us!!'
        },
    ]

    for(let i=0; i < helpText.length; i++){
        console.log('current i value ' + i);
        const btnElement = document.querySelector("#" + helpText[i]['id']);

        // const helpTextMaker = (j)=>{
        //     return ()=>{
        //         helpTextElement.textContent = helpText[j]['text'];
        //     }
        // }
        
        // btnElement.addEventListener('mouseenter',helpTextMaker(i))
        btnElement.addEventListener('mouseenter',()=>{
            helpTextElement.textContent =  helpText[i]['text'];
        })
        btnElement.addEventListener('mouseleave',()=>{
            helpTextElement.textContent = "";
        })
    }
})