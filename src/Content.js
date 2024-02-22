import React from "react";
import { useState } from "react";
import ItemsList from "./ItemsList"

const Content = (props) => {
    // const [count, setCount] = useState(0);

    // const handleClick = () => { setCount(count + 1) }
    // return (

    //     <div>

    //         <h2>You have got {count} subscribers</h2>
    //         <button onClick={handleClick} >Subscibe</button>
    //     </div>
    // )

    // const [name, setName] = useState("Earn")
    // const handleClick = () => {
    //     const names = ["Earn", "Grow", "Give"];
    //     const ind = Math.floor(Math.random() * 3);
    //     setName(names[ind]);
    // }
    // return (


    //     <main>
    //         <p>Let's {name} Money</p>
    //         <button onClick={handleClick}>Subscribe</button>
    //     </main>
    // )

    const { names, setNames, handleCheck, handleDelete } = props;

    return (
        <div>


            <ItemsList names={names} handleCheck={handleCheck} handleDelete={handleDelete} />

        </div>
    )
}

export default Content;