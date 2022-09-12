import { FC } from "react"

interface ButtonProps{
    text:string,
    customStyle:string,
    clickHandler:()=>void
}

const Button:FC<ButtonProps> = ({text,customStyle, clickHandler}) => {
    return(
        <button className={customStyle}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}
export default Button