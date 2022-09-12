import { FC } from "react"
interface ColorSelectProps{
    customStyle:string,
    changeColorHandler:() => void
}
const ColorSelector:FC<ColorSelectProps> = ({customStyle,changeColorHandler}) => {
    return (
        <div className={customStyle}
            onClick={changeColorHandler}
        >
        </div>
    )
}
export default ColorSelector;