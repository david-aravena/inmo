"use client"
import { useState } from "react";
import { useAnimationInput } from "src/hooks/animationInput/useAnimationInput"
import styles from './animatedInput.module.css'

export default function AnimatedInput({nameInput, textInput, value, onChange}){
    const animationInput = useAnimationInput();

    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);  // Actualiza el valor en el componente padre
      };

    return(
        <div className={styles.inputField}>
            <label 
                htmlFor={`${nameInput}`}
                className={`${animationInput.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
            >
                {`${textInput}`}
            </label>
            <input 
                id={`${nameInput}`}
                name={`${nameInput}`}
                type="text" 
                className={`${styles.textInput} ${animationInput.inputFocus && styles.textInputBlur}`}
                onFocus={() => animationInput.focusAnimation()}
                onBlur={(e) => animationInput.blurAnimation(e)}
                value={value}  // El valor se controla desde el componente padre
                onChange={handleChange}
            />
        </div>
    )
}