import Link from "next/link";
export const metadata = {
  title: "Tienda",
};
export default function Categoryroot({children}) {
  return (
    <>
      {children}
      <h1>Pagina categorias</h1>
      <Link href="/products/categories">Categorias</Link>
    </>
  );
}

