import React, { useReducer, useState } from 'react'
import "./App.css"


const AddtoDo = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, { text: action.name }]

        case "DELETE_ITEM":
            const updated_item = [...state]
            updated_item.splice(action.index, 1)
            return updated_item

        default:
            return state




    }


}

const DoList = () => {

    const initialvalue = []
    const [uservalue, setuservalue] = useState("")
    const [updatevalue, dispatch] = useReducer(AddtoDo, initialvalue)
    const AddItem = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD_ITEM", name: uservalue })
        setuservalue("")
    }
    const DeleteItem = (index) => {

        dispatch({ type: "DELETE_ITEM", index })
        
    }

    return (
        <centre>
        <div className='a'>
            <h1>To-Do-List</h1>
            <input className='b' type="text" value={uservalue} onChange={(e) => setuservalue(e.target.value)} />

            <button  className="k" type="submit" onClick={AddItem}>Add to todo</button>
            {updatevalue.map((value, index) => {
                return (
                    <li style={{fontSize:"36px",listStyleType:"none"}}>
                        {value.text}
                        <button className='j' onClick={() => { DeleteItem(index) }}>delete</button>
                    </li>
                )
            }
            )

            }
        </div>
        </centre>
    )
}

export default DoList