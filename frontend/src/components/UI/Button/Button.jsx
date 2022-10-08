import React from 'react'
import classes from './Button.module.css'

export default function Button() {
  return (
    <div>
         <button type="submit" className={classes.Button}>Upload</button>
    </div>
  )
}
