document.addEventListener('DOMContentLoaded',()=>{
    const getUsersButton = document.createElement('button');
    getUsersButton.textContent = 'Get users';

    const headingElement = document.querySelector('#heading');
    headingElement.after(getUsersButton);

    const userContainer = document.createElement("div");
    getUsersButton.after(userContainer);

    getUsersButton.addEventListener('click',()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => 
                data.forEach(eachUser => {
                    const userNameElement = document.createElement('h5');
                    userNameElement.textContent = eachUser.name;
                    userContainer.appendChild(userNameElement);

                    const emailElement = document.createElement('p');
                    emailElement.textContent = eachUser.email;
                    userContainer.appendChild(emailElement);
                })
            )
            .catch((error) => {
                console.log(error);
            })
    })

    const selectElement = document.querySelector("#countries");
    fetch("https://api.sampleapis.com/countries/countries")
        .then((response) => response.json())
        .then((data) => 
            data.forEach((eachCountry) => {
                const optionElement = document.createElement('option');
                optionElement.textContent = eachCountry.name;
                selectElement.appendChild(optionElement);
            })
        )
})