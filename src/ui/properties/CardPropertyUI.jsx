import styles from './cardPropertyUI.module.css'

export default function CardPropertyUI({children, item, index}){

  function capitalizeFirstLetter(string) {
    if (!string) return ''; // Maneja casos donde el string sea null o undefined
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return(
    <div key={index} className={styles.card}>
      <div className={styles.imageContainer} style={{flex: "1 1 auto"}}>
        {children}
      </div>
      <div className={styles.metadata}>
        <h3>{capitalizeFirstLetter(item.type)} en {item.state}</h3>
      </div>
      <div className={styles.icons}>
        <div style={{display:"flex", alignItems:"center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="white" fillRule="evenodd" d="M11.5 3.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 1 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 1 1 0-.9z" clipRule="evenodd"></path></svg>
          <h3>{item.mts} mts</h3>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="white" stroke="#1b1464" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8zM6 35v4m36-4v4"></path><path d="M20 18h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3m14 0h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3M4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></path></g></svg>  
          <h3>{item.bedRooms} </h3>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256"><path fill="white" d="M240 92h-28.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H68V52a8 8 0 0 1 8-8a8.5 8.5 0 0 1 8.24 6.39a12 12 0 0 0 23.52-4.78A32.22 32.22 0 0 0 44 52v40H16a12 12 0 0 0-12 12v40a60.07 60.07 0 0 0 56 59.85V216a12 12 0 0 0 24 0v-12h88v12a12 12 0 0 0 24 0v-12.15A60.07 60.07 0 0 0 252 144v-40a12 12 0 0 0-12-12m-92 16h40v24h-40Zm80 36a36 36 0 0 1-36 36H64a36 36 0 0 1-36-36v-28h96v28a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-28h16Z"></path></svg>
          <h3>{item.bathrooms}</h3>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256"><path fill="white" d="M236 108h-23l-42.17-42.14A19.86 19.86 0 0 0 156.69 60H48.28a20 20 0 0 0-16.64 8.91L2 113.34A12 12 0 0 0 0 120v48a20 20 0 0 0 20 20h13.5a34 34 0 0 0 65 0h59a34 34 0 0 0 65 0H236a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M50.42 84H155l24 24H34.42ZM66 188a10 10 0 1 1 10-10a10 10 0 0 1-10 10m124 0a10 10 0 1 1 10-10a10 10 0 0 1-10 10m42-24h-11a34 34 0 0 0-62 0H97a34 34 0 0 0-62 0H24v-32h208Z"></path></svg>
          <h3>{item.parking}</h3>
        </div>
      </div>
    </div>
  )
}