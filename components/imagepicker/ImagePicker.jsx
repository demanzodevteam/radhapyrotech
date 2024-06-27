'use client';

import { useRef, useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

function ImagePicker({ label, name }) {
  const [pickedImage, setpickedImage] = useState(null);

  const imageInput = useRef(null);

  function handleImageElClick() {
    imageInput.current.click();
  }

  function handleImageInput(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    if (!file) {
      setpickedImage(null);
      return;
    }
    fileReader.onload = () => setpickedImage(fileReader.result);

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={`${styles.preview} w-16 h-16`}>
          {pickedImage ? (
            <div>
              <Image
                src={pickedImage}
                alt='pickedImage'
                fill
                priority
                className='object-contain'
              />
            </div>
          ) : (
            <p>No Image Selected</p>
          )}
        </div>
        <input
          type='file'
          id={name}
          name={name}
          accept='image/jpeg,image/png'
          className={styles.input}
          ref={imageInput}
          onChange={handleImageInput}
          required={true}
        />
        {/* {imagePickerError && (
          <label className='text-red-600'>Pls choose a Image</label>
        )} */}
        <button
          type='button'
          onClick={handleImageElClick}
          className={styles.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
