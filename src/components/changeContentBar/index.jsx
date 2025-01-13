import Link from 'next/link'
import Image from 'next/image'

export default function ChangeContentBar(){
    return(
        <div style={{background:"#1e1e1e", display:"flex", padding:"4px", borderRadius:"1rem 1rem 0 0"}}>
            <Link href="/info">
                <Image src="/svg/info.svg" width={40} height={40} alt="Error logo" style={{padding:"0 8px"}} />
            </Link>
            <Link href="/properties">
                <Image src="/svg/realstate.svg" width={40} height={40} alt="Error logo" style={{padding:"0 8px"}}/>
            </Link>
            <Link href="/">
                <Image src="/svg/users.svg" width={40} height={40} alt="Error logo" style={{padding:"0 8px"}} />
            </Link>
        </div>
    )
}