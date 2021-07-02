import './App.css';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import Note from './Note'

function App() {

  const [newKeepData, setNewKeepData] = useState([])

  const [keepData, setKeepData] = useState({
    title: "",
    note: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setKeepData((oldItem) => {
      return {
        ...oldItem,
        [name]: value
      }
    })
  };

  const AddNote = () => {
    setNewKeepData((oldData) => {
      return [...oldData, keepData]
    })
    setKeepData({
      title: "",
      note: "",
    });
  };

  const DeleteItems = (id) => {
    setNewKeepData((oldItem) => {
      return oldItem.filter((arr,index)=>{
        return index != id;
      })
    })
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Google Keep</h1>
      </div>

      <div className="input_div">
        <input
          onChange={InputEvent}
          type="text" placeholder="Title..."
          autoComplete="off"
          name="title"
          value={keepData.title} />
        <textarea
          onChange={InputEvent}
          placeholder="Enter Your Note..."
          name="note"
          value={keepData.note}></textarea>
        <button type="button" onClick={AddNote}>
          <AddIcon />
        </button>
      </div>

      <div className="keep_body">

        {newKeepData.map((itemVal, index) => {
          return (
            <Note title={itemVal.title}
              note={itemVal.note}
              key={index}
              id={index}
              onSelect={DeleteItems}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
