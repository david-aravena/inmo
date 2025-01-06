import Image from "next/image";

export default function Show({ params }) {
    console.log(params.id)
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{color:"white"}}>hola</h1>
    </div>
  );
}
