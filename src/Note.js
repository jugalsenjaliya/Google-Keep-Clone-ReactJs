import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Note = () => {
    return(
        <div className="box">
          <h2>{keepData.title}</h2>
          <h2>{keepData.note}</h2>
          <button><DeleteIcon /></button>
        </div>
    )
}