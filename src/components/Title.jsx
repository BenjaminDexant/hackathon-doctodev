import React from "react";
import '../style/title.css';

export default function Title({text}){
  return(
    <div>
      <h1 className="title">{text}</h1>
    </div>
  )
}