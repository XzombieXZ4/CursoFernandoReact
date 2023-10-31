import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [input, setInput] = useState('')
    const getInput=({target:{value}})=>{
        setInput(value)

    }
    const saveInput=({key})=>{
        if(key==='Enter'){
            if(input<=0)return
            onNewCategory(input)
            setInput('')
        }
    }
  return (
    <input type="text" placeholder="Buscar Gifts" value={input} onChange={getInput} onKeyDown={saveInput}/>
  )
}
