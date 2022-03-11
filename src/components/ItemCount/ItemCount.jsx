import React, { useState } from "react";
import Button from "../Stateless/Button/Button";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(0);

    const more = () => {
        if (count < stock) {
            setCount(count + 1)
            console.log(count)
        }
    }

    const less = () => {
        if (count > 1) {
            setCount(count - 1)
            console.log(count)
        }
    }

    const add = () => {
       onAdd(count)
       console.log(`cantidad agregada ${count}`)
    }
      
    return (

        <>

            <div>
                <div className="count">
                    <button className="btns" onClick={more}>+</button>
                    <h2>{count}</h2>
                    <button className="btns" onClick={less}>-</button>
                </div>
                <div className="add">
                    <button onClick={add} >Agregar</button>
                </div>  
                <p>Stock ={stock}</p>  
            </div>
           
        </>

    );
}

export default ItemCount;
