import { useState } from "react"
import data from "./data"
import "./index.css"
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setEMultiple] = useState([]);

    function handleSingleSelection(getCurrentid) {
        setSelected(getCurrentid === selected ? null : getCurrentid);

    }
    function Lock(getCurrentid) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.findIndex(getCurrentid);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentid);
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setEMultiple(cpyMultiple);

    }



    return <div className="wrapper">

        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Lock</button>
        <div className="accordian">
            {data && data.length > 0 ? (
                data.map((dataItem) => (<div className="item">
                    <div onClick={enableMultiSelection ? () => handleSingleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ?
                            multiple.indexOf(dataItem.id) !== -1 &&
                            <div className="content">{dataItem.answer}</div> :
                            selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)
                    }
                    {
                       /* selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1  ? 
                        <div className="content">{dataItem.answer}</div>
                        : null
                       */ }
                </div>)))
                : (<div>No data found</div>)
            }
        </div>
    </div>
}