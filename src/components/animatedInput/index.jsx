"use client"
import { useAnimationInput } from "src/hooks/animationInput/useAnimationInput"
import styles from './animatedInput.module.css'

export default function AnimatedInput({
    nameInput,
    textInput,
    value=null,
    onChange=null,
    index,
    type="text",
    options=null
}){
    const animationInput = useAnimationInput();

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (onChange) {
            onChange(newValue);
        }
    };

    return(
        <div key={index} className={styles.inputField}>
            {type === "text" && (
                <>
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
                        {...(value !== null && { value })}
                        {...(onChange !== null && { onChange: handleChange })}
                    />
                </>
            )}

            {type === "select" && (
                <>
                    <label htmlFor={`${nameInput}`} className={styles.labelBlur}>{`${textInput}`}</label>
                    <select name={`${nameInput}`} id={`${nameInput}`} className={styles.textInput}>
                        {options.map((option) => (
                            <option value={`${option}`}>{`${option}`}</option>
                        ))}
                    </select>
                </>
            )}
        </div>
    )
}