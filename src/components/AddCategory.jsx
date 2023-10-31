import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange=({target:{value}})=>{
        setInputValue(value)
    }
    const saveValue=({key})=>{
        if(key=='Enter'){
            if(inputValue.trim()==0) return
            // onAddCategory(cat=>[...cat, inputValue])
            onNewCategory(inputValue)
            setInputValue('')
          }
    }
  return (
    <input type="text" placeholder="Buscar Gifts" value={inputValue} onChange={onInputChange} onKeyDown={saveValue}/>
  )
}
