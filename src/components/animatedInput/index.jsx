"use client"
import { useAnimationInput } from "src/hooks/animationInput/useAnimationInput"
import styles from './animatedInput.module.css'

export default function AnimatedInput({
    nameInput,
    textInput,
    value = null,
    onChange = null,
    index,
    type = "text",
    options = null
}) {
    const animationInput = useAnimationInput();

    const handleChange = (e) => {
        const newValue = type === "boolean" ? e.target.value === "true" : e.target.value;
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div key={index} className={styles.inputField}>
            {type === "text" && (
                <>
                    <label 
                        htmlFor={nameInput}
                        className={`${animationInput.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                    >
                        {textInput}
                    </label>
                    <input
                        id={nameInput}
                        name={nameInput}
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
                    <label htmlFor={nameInput} className={styles.labelBlur}>{textInput}</label>
                    <select name={nameInput} id={nameInput} className={styles.textInput} onChange={handleChange}>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </>
            )}

            {type === "date" && (
                <>
                    <label htmlFor={nameInput} className={styles.labelBlur}>{textInput}</label>
                    <input type="date" id={nameInput} name={nameInput} className={styles.textInput} onChange={handleChange} />
                </>
            )}

            {type === "textarea" && (
                <>
                    <label htmlFor={nameInput} className={styles.labelBlur}>{textInput}</label>
                    <textarea id={nameInput} name={nameInput} rows="4" cols="50" className={styles.textInput} onChange={handleChange} />
                </>
            )}

            {type === "number" && (
                <>
                    <label 
                        htmlFor={nameInput}
                        className={`${animationInput.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                    >
                        {textInput}
                    </label>
                    <input
                        id={nameInput}
                        name={nameInput}
                        type="number"
                        className={`${styles.textInput} ${animationInput.inputFocus && styles.textInputBlur}`}
                        onFocus={() => animationInput.focusAnimation()}
                        onBlur={(e) => animationInput.blurAnimation(e)}
                        {...(value !== null && { value })}
                        {...(onChange !== null && { onChange: handleChange })}
                    />
                </>
            )}

            {type === "boolean" && (
                <>
                    <label className={styles.labelBlur}>{textInput}</label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name={nameInput}
                                value="true"
                                checked={value === true}
                                onChange={handleChange}
                            /> Sí
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={nameInput}
                                value="false"
                                checked={value === false}
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                </>
            )}
        </div>
    );
}
