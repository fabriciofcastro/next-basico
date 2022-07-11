import Link from 'next/link'

export default function routes() {

    return (
        <>
            <h1>routes indexx</h1>

            <ul>
                <Link href="/routes/id/indexx"> 
                    <li>Parasdsadsadadms</li>
                </Link>

                <Link href="/routes/12233/buscar"> 
                    <li>Rotas dinâmicas</li>
                </Link>

                <Link href="/routes/12233/Fabricio"> 
                    <li>Rotas dinâmicas</li>
                </Link>
            </ul>
        </>
    )
}