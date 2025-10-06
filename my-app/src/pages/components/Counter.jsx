`use client`

import {useState} from "react";

export default function Counter() {
    console.log("Counter rendered");

    let [count, setCount] = useState(0);

    const counterHandler = () => {
        console.log("Counter clicked");
        setCount(count + 1);
    }

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={counterHandler}>
                &nbsp; + &nbsp;
            </button>
        </div>
    )
}