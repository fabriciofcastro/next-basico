import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export default function routes() {

    const router = useRouter()

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoParametros() {

        router.push({
            pathname: "/routes/params",
            query: {
                id: 123,
                nome: "Eloá"
            }
        })
    }

    return (
        <>
            <h1>routes indexx</h1>

            <ul>
                <Link href="/routes/params?id=123&nome=Eloa"> 
                    <li>Page Params</li>
                </Link>

                <Link href="/routes/12233/buscar"> 
                    <li><a>Rotas dinâmicas</a></li>
                </Link>

                <Link href="/routes/12233/Fabricio"> 
                    <li><a>Rotas dinâmicas</a></li>
                </Link>
            </ul>

            <div style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}>

                 <button style={{
                    margin: "10px",
                 }}
                    onClick={() => router.push("/routes/params?id=123&nome=Eloa")}>Buscar link programavel</button>
                 <button style={{
                    margin: "10px",
                 }}
                    onClick={() => navegacaoSimples("/routes/12233/Fabricio")}>Buscar link programavel</button>

                <button style={{
                    margin: "10px",
                 }}
                    onClick={ navegacaoParametros}>Params</button>

            </div>
        </>
    )
}