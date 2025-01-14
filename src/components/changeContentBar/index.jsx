"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ChangeContentBar() {

    const pathname = usePathname();

    if (pathname.startsWith('/show')) {
        return null;
    }

  const isActive = (path) => pathname === path;

  return (
    <div className="changeContentBar">
        <Link href="/">
            <Image
            src="/svg/users.svg"
            width={40}
            height={40}
            alt="Users logo"
            style={{
                padding: "0 8px",
                filter: isActive('/') ? 'brightness(500%)' : 'none'
            }}
            />
        </Link>
        <Link href="/properties">
            <Image
            src="/svg/realstate.svg"
            width={40}
            height={40}
            alt="Real estate logo"
            style={{
                padding: "0 8px",
                filter: isActive('/properties') ? 'brightness(500%)' : 'none',
            }}
            />
        </Link>
        <Link href="/info">
            <Image
            src="/svg/info.svg"
            width={40}
            height={40}
            alt="Info logo"
            style={{
                padding: "0 8px",
                filter: isActive('/info') ? 'brightness(500%)' : 'none',
            }}
            />
        </Link>
    </div>
  );
}
