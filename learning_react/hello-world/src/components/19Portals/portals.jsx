import React from "react";
import ReactDOM from 'react-dom';

function PortalsDemo(){
    return ReactDOM.createPortal(
        <p>Hello from portals</p>,
        document.getElementById('portal-root')
    )
}

export default PortalsDemo

//Portals lets you to insert nodes outside the root node