import localFont from "next/font/local";
import Navbar from 'src/components/navbar/'
import ChangeContentBar from 'src/components/changeContentBar/'
import "./globals.css";

const montserratRegular = localFont({
  src: './../fonts/Montserrat-Regular.ttf',
  variable: '--font-montserrat-regular',
  weight: '400',
});

const montserratSemiBold = localFont({
  src: './../fonts/Montserrat-SemiBold.ttf',
  variable: '--font-montserrat-semi-bold',
  weight: '600',
});

const montserratBold = localFont({
  src: './../fonts/Montserrat-Bold.ttf',
  variable: '--font-montserrat-bold',
  weight: '700',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{display: "flex", flexDirection: "column", height: "100vh"}} className={`${montserratRegular.variable} ${montserratSemiBold.variable} ${montserratBold.variable}`}>
        <div style={{width: "100vw", flex: "0 0 auto", backgroundColor: "#1e1e1e"}}>
          <Navbar />
        </div>
        <div style={{width: "100vw", flex: "1 1 auto", overflowY: "auto", backgroundColor: "black"}}>
          {children}
        </div>
        <div style={{position:"absolute", bottom:0, zIndex:"1", display:"flex", justifyContent:"center", width:"100vw"}}>
          <ChangeContentBar />
        </div>
      </body>
    </html>
  );
}
