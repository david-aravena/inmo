import Link from 'next/link'
import Image from 'next/image'

export default function ChangeContentBar(){
    return(
        <div style={{background:"#333333", borderRadius:"1rem 1rem 0 0", display:"flex", flexDirection:"column"}}>
            <Link href="/info">
                <Image src="/svg/info.svg" width={35} height={35} alt="Error logo" />
            </Link>
            <Link href="/properties">
                <Image src="/svg/realstate.svg" width={35} height={35} alt="Error logo" />
            </Link>
            <Link href="/">
                <Image src="/svg/users.svg" width={35} height={35} alt="Error logo" />
            </Link>
        </div>
    )
}