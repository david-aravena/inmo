import Link from 'next/link'
import Image from 'next/image'
import AuthButtons from './components/AuthButtons'

export default function Navbar(){
  
  return(
    <nav style={{display:"flex", justifyContent:"space-between", alignItems: "center", padding:"0 1rem"}}>
      <div>
        <Link href="/">
          <Image src="/images/inmobiliarioLogo.png" width={117} height={117} alt="Error logo" />
        </Link>
      </div>
      <div>
        <AuthButtons />
      </div>
    </nav>
  )
}