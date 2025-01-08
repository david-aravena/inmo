"use client"
import Image from "next/image";
import { useState } from "react";

export default function ShowImages({item, styles}){
    const [imageSelected, setImageSelected] = useState(item.images[0]);

    return(
        <>
            <div className={styles.imageSelectedContainer}>
            <Image
                src={imageSelected}
                alt="error"
                objectFit="cover"
                width={500}
                height={500}
                style={{
                width: '100%',
                height: 'auto',
                }}
            />
            </div>
            <div className={styles.imagesList}>
            {item.images.map((image, index) => (
                <Image key={index} src={image} alt="" width={100} height={100} style={{margin: "0 8px", objectFit:"cover"}} onClick={() => setImageSelected(image)} />
            ))}
            </div>
        </>
    )
}