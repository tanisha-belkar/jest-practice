import React from "react";
import Listitem from "./Listitem";

export default function List(props) {
    return (<ol>
        {props.array.map((item, index)=> {
            return <Listitem key={5+index} text={item}/>;
        })}
    </ol>)
}