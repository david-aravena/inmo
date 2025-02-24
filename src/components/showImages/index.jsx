"use client"

export default function ShowImages({item, styles}){

    return(
        <>
            <div className={styles.imagesList}>
                {item.image && (
                    <img src={item.image} alt="" width={"100%"} height={500} style={{margin: "0 8px", objectFit:"cover", maxHeight:"100%"}} onClick={() => setImageSelected(image)} />

                )}

                {item.images && (
                    <>
                        {item.images.map((image, index) => (
                            <img key={index} src={image} alt="" width={400} height={500} style={{margin: "0 8px", objectFit:"cover", maxHeight:"100%"}} onClick={() => setImageSelected(image)} />
                        ))}
                    </>
                )}
            </div>
     
        </>
    )
}