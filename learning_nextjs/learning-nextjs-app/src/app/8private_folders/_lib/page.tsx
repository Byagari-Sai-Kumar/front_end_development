export default function PrivateFolder(){
    return(
        <h1>This file is inside private folder and you cannot view this in the browser</h1>
    )
}

//1. Always use underscore "_folderName" this naming convention when creating folders and next.js will
//exclude these folders from routing.

//2. Private folders helps us to maintain bussiness logic and UI separate.

//3. We have a consistant way to organize internal files in our project.

//4. Avoiding potential naming conflicts with future next.js file name conventions.

//5. If you really required to maintain underscore in the folder starting then use "%5F" which is same as underscore
// while creating a folder "%5Fcharts". now next.js treats these as a normal regular folders only

//6. while calling in the browser we can use localhost:3000/privateFolder/%5Fcharts 