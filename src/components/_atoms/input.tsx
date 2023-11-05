import React from "react";
interface InputTypes  {
    value:string;
    type: "password" | "email" | "name";
    name:string;
    placeholder: string;
    onChange: (e:React.FocusEvent<any,Element>) => void;
    onBlur: (e:React.FocusEvent<any,Element>) => void;
}

const Input = ({ type , value , name , placeholder , onBlur , onChange}:InputTypes) =>{
    return (
        <input 
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        />
    )
}
export default Input