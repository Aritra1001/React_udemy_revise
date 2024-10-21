"use client";

import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {

  const [pickedImage, setPickedImage] = useState('');
  const imagePickRef = useRef();

// To preview the picked image, we need to handle the event that the image was picked and then store that state
// and update the UI as soon as we are having a picture.  
// In order to show the image as a preview here, we have to convert it to a so called data url, which is simply a value which can be used as a source for an image element.

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if(!file){
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
        setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);
  }

  const handleImagePick = () => {
    imagePickRef.current.click();
    // here we have connected the click on the button to trigger the ref on the input tag
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage && <Image src={pickedImage} alt="Image picked by the user" fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          ref={imagePickRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
