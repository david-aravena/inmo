import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  
  return(
    <nav>
      <div>
        <Link href="/">
          <Image src="/images/logo.png" width={117} height={117} alt="Error logo" />
        </Link>
      </div>
      <div>

      </div>
    </nav>
  )
}