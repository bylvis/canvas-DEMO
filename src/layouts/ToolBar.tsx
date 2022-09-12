import { FC } from "react"
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import ColorSelector from "../components/ColorSelector";
import { colorAction } from "../store/color-slice";
import { resetAction } from "../store/resetTime-slice";
import '../style/toolBar.scss'
const ToolBar:FC = () => {
    const dispatch = useDispatch()
    const changeRedColor = () => {
        dispatch(colorAction.changeRedColor())
    }
    const changeBlueColor = () => {
        dispatch(colorAction.changeBlueColor())
    }
    const changeYellowColor = () => {
        dispatch(colorAction.changeYellowColor())
    }
    const resetHandler = () => {
        dispatch(resetAction.resetHandler())
    }
    return (
        <div className="tool-bar">
            <ColorSelector changeColorHandler={changeRedColor} customStyle="select-color select-red "></ColorSelector>
            <ColorSelector changeColorHandler={changeBlueColor} customStyle="select-color select-blue"></ColorSelector>
            <ColorSelector changeColorHandler={changeYellowColor} customStyle="select-color select-yellow"></ColorSelector>
            <Button clickHandler={resetHandler} text="Resect" customStyle="res-button"></Button>
        </div>
    )
}
export default ToolBar;