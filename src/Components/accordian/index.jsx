import React, { useState } from 'react'
import data from './data';
import './styles.css';

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId)
    setselected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple)
  }

  return (
    <div className='wrapper'>
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection </button>
      <div className='accordian'>
        {
          data && data.length > 0 ?
            data.map(dataItem => <div className='item'>
              <div onClick={enableMultiSelection
                 ? () => handleMultiSelection(dataItem.id)
                 : () => handleSingleSelection(dataItem.id)
                } 
                 className='title'>
                <h3> {dataItem.question}</h3>
                <span> + </span>
              </div>
              {
                selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !==-1 ?(
                  <div className='content'>{dataItem.answer} </div>)
                  : null
              }

            </div>)
            : <div> No data available </div>
        }
      </div>
    </div>
  )
}

export default Accordian

