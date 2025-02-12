"use client"
import Image from "next/image";

export default function ShowImages({item, styles}){

    return(
        <>
            <div className={styles.imagesList}>
                {item.images.map((image, index) => (
                    <Image key={index} src={image} alt="" width={400} height={500} style={{margin: "0 8px", objectFit:"cover", maxHeight:"100%"}} onClick={() => setImageSelected(image)} />
                ))}
            </div>
     
        </>
    )
}