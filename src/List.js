import React, { useState, useEffect } from 'react'

function List(props) {
    const { list, setList, handleMove, title } = props;
    const [newElement, setNewElement] = useState("");

    const addElement = () => {
        if (newElement !== "") {
            const listTmp = [...list];
            listTmp.push(newElement);
            setList(listTmp);
            setNewElement("");
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            {
                list.map((element, i) => {
                    return (
                        <div key={i} style={{ display: "flex", marginTop: 10 }}>
                            <p>{element}</p>
                            <button onClick={() => { handleMove(title, i) }}>MOVE</button>
                        </div>
                    )
                })
            }
            <input value={newElement} onChange={(e) => setNewElement(e.target.value)} />
            <button onClick={addElement}>Aggiungi</button>
        </div>
    )
}

export default List
