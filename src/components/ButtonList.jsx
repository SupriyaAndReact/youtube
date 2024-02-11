import React from "react";
import Button from "./Button";

const ButtonList =()=>{
    return(
    <div className="flex">
        <Button name='All'/>
        <Button name='Music'/>
        <Button name='Live'/>
        <Button name='News'/>
        <Button name='Cooking'/>
        <Button name='Games'/>
        <Button name='Cricket'/>
        <Button name='Trailers'/>
        <Button name='Tourism'/>
        <Button name='Recently Uploaded'/>
    </div>
    )
}

export default ButtonList