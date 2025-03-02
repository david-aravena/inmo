"use client"
import {useState} from 'react'

export const useAnimationInput = (state) => {
    const [inputFocus, setInputFocus] = useState(state)

    const blurAnimation = (e) => {
        if(e.target.value === ""){
            setInputFocus(false);
        }
    }

    const focusAnimation = () => {
        setInputFocus(true)   
    }

    return {
        inputFocus,
        focusAnimation,
        blurAnimation 
    }
}