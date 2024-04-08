import Link from "next/link";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

let curUser = null;

function AnonymousHeader() {
  return (
    <>
      <div>
        <Link href="/home">Home</Link>
      </div>

      <div>
        <Link href="/explore">Explore</Link>
      </div>

      <div>
        <Link href="/travelers">Travelers</Link>
      </div>

      <div>
        <Link href="/settings">Settings</Link>
      </div>

      <div>Sign Up / Sign In</div>
    </>
  );
}

function LoggedInHeader() {
  <>
    <div>
      <Link href="/home">Home</Link>
    </div>
    <div>
      <Link href="/profile">Profile</Link>
    </div>
    <div>
      <Link href="/explore">Explore</Link>
    </div>
    <div>
      <Link href="/favorites">Favorites</Link>
    </div>
    <div>
      <Link href="/messages">Messages</Link>
    </div>
    <div>
      <Link href="/travelers">Travelers</Link>
    </div>
    <div>
      <Link href="/settings">Settings</Link>
    </div>

    <div>Sign Out</div>
  </>;
}

function RootLayout({ children }) {
  let header;
  if (curUser) {
    header = <LoggedInHeader />;
  } else {
    header = <AnonymousHeader />;
  }

  let component = (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
      </body>
    </html>
  );

  return component;
}

export default RootLayout;
