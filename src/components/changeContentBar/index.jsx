"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const icons = [
    {
        url: "/",
        svg: "/svg/users.svg"
    },
    {
        url: "/properties",
        svg: "/svg/realstate.svg"
    },
    {
        url: "/info",
        svg: "/svg/info.svg"
    }
]

export default function ChangeContentBar() {

    const pathname = usePathname();

    if (pathname.startsWith('/show')) {
        return null;
    }


  const isActive = (path) => pathname === path;

  return (
    <div className="changeContentBar">
        {icons.map((icon, index) => (
            <Link key={index} href={`${icon.url}`}>
                <img
                src={icon.svg}
                width={40}
                height={40}
                alt={icon.alt}
                style={{
                    padding: "0 8px",
                    filter: isActive(`${icon.url}`) ? 'brightness(500%)' : 'none'
                }}
                />
            </Link>    
        ))}
    </div>
  );
}
