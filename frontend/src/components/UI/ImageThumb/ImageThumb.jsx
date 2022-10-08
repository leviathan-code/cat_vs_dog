import React from "react";
import classes from './ImageThumb.module.css'

export default function ImageThumb({ image }) {
        return(<div className = {classes.ImgBox}>
                {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
                </div>)
};