export default function SelectImages({images}){

  return(
    <div style={{width:"400px", height:"500px", overflow:"hidden"}}>
      {images.map((image) => (
        <img src={image.objectUrl} alt="" height={"100%"}/>
      ))}
    </div>
  )
}