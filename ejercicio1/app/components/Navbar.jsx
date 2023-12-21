import Link from "next/link";
export default function Navbar() {
    return (
      <html>
        <body>
          <nav>
            <Link href="/">Home</Link> //
            <Link href="/about">About</Link> //
            <Link href="/products"> Products </Link> //
            <Link href="/posts"> PostPage </Link>
          </nav>
        </body>
      </html>
    );
}