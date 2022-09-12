import { FC, useEffect, useState } from "react"
import { MouseEvent } from "react"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import '../style/DrawingBoard.scss'
const DrawingBoard:FC = () => {
    const color = useSelector((state:RootState) => state.color.value)
    const reset = useSelector((state:RootState) => state.reset.value)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [offsetX,setOffsetX] = useState<number>(0)
    const [offsetY,setOffsetY] = useState<number>(0)
    const [isDrawing,setIsDrawing] = useState<boolean>(false)
    useEffect(()=>{
        const canvas = canvasRef.current as HTMLCanvasElement
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
        
        const clientRect = canvas.getBoundingClientRect()
        setOffsetX(clientRect.left)
        setOffsetY(clientRect.top)

        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        context.lineCap = 'round'
        context.lineWidth = 10
        context.strokeStyle = color 
        contextRef.current = context
    },[reset])
    useEffect(()=>{
        if(contextRef.current){
            contextRef.current!.strokeStyle = color
        }
    },[color])
    const startDraw = (event:MouseEvent) => {
        setIsDrawing(true)
        const {clientX,clientY} = event
        contextRef.current!.beginPath()
        contextRef.current!.moveTo((clientX -offsetX)*2,(clientY- offsetY)*2)
    }
    const drawing = (event:MouseEvent) => {
        if(!isDrawing) return
        const {clientX,clientY} = event
        contextRef.current!.lineTo((clientX-offsetX)*2,(clientY-offsetY)*2)
        contextRef.current!.stroke()
    }
    const finishDraw = (event:MouseEvent) => {
        contextRef.current!.closePath() 
        setIsDrawing(false)
    }
    return (
        <canvas 
            ref={canvasRef}
            className="draw-bar"
            onMouseDown={startDraw}
            onMouseMove={drawing}
            onMouseUp={finishDraw}
            >
        </canvas>
    )
}
export default DrawingBoard;