import Link from "next/link";
export default function Notfound() {
  return (
    <>
      <h2>Error 404</h2>
      <h1>Página no encontrada</h1>
      <Link href="/">Home</Link>
    </>
  );
}
