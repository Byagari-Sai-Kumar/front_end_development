import React, {useState,useEffect, use} from "react";
import axios from "axios";

export const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //Case 1:
        // useEffect(() => {
        //     console.log('useEffect is called')
        // })
        // return(
        //     <button>Click {count}</button>
        // )

    //Case 2:
        // useEffect(() => {
        //     console.log('button is clicked');
        //     console.log('input is udpated');
        // },[count])
    
        // const handleClick = () => {
        //     setCount(count + 1)
        // }
        
        // return(
        //     <>
        //         <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        //         <button onClick={handleClick}>click {count}</button>
        //     </>
        // )

    //Case 3:
        // useEffect(() => {
        //     console.log('Called only once')
        // },[])

        // const handleClick = () => {
        //     setCount(count + 1)
        // }

        // return(
        //     <button onClick={handleClick}>Click {count}</button>
        // )

    //case 4:
        // const increaseCount = () => {
        //     setCount(count + 1)
        // }

        // useEffect(() => {
        //     const increaseCountButton = document.querySelector('#increaseCountButton');
        //     increaseCountButton.addEventListener('click',increaseCount);
        //     console.log('useEffect called');
            
        //     return () => {
        //         increaseCountButton.removeEventListener('click',increaseCount);
        //     }
        // },[])
        
        // const removePara = () => {
        //     const container = document.querySelector('#container')
        //     const para = document.querySelector('#para');
        //     container.removeChild(para);
        // }

        // return(
        //     <div id='container'>
        //         <button id='increaseCountButton' onClick={() => setCount(count + 1)}>Increase count</button>
        //         <button onClick={removePara}>Remove para</button>
        //         <p id="para">{count}</p>
        //     </div>
        // )

    //Case 5:
    const [userPost, setUserpost] = useState({});
    const [postId, setPostId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleFetchPost = () => {
        setIdFromButtonClick(postId)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setUserpost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick])

    return(
        <>
            <input type="text" value={postId} onChange={e => setPostId(e.target.value)}/>
            <button type="button" onClick={handleFetchPost}>Fetch title</button>
            <p>{userPost.title}</p>
        </>
    )
}

//useEffect is the replacement of componentDidMount, componentDidUpdate, componentWillUnmount in the class components

//Case 1:
    //As same as componentDidMount, useEffect is called once after the intial render

//Case 2:
    //As same as componentDidUpdate, useEffect is also called every time after the state is been updated and component re-render
    //so to avoid this and only update when the prevState is changed, pass an array with watch state variable
    //only if this variable update, execute the useEffect 

//Case 3:
    //Only invoke useEffect once in the lifecycle
    //pass an empty array as second argument

//Case 4:
    //to mimic componentWillUnmount, useEffect's first parameter returns a function
    //in this return function we can perform all the componentWillUnmount handles like remove subscriptions, remove event listeners

//Case5:
    //fetch data in the useEffect using axios library