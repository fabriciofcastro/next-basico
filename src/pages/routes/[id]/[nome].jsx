import { useRouter } from 'next/router'
import Link from 'next/link'

export default function nome() {

    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.nome

    console.log(router);

    return (
        <>
           <h1>Router {nome} {codigo} Buscar!!!</h1>

           <ul>
                 <Link href="/routes/12233/buscar"> 
                    <li><a>Rotas dinâmicas</a></li>
                </Link>

                <Link href="/routes/indexx"> 
                    <li><a>Rotas /indexx</a></li>
                </Link>

                <Link href="/routes/12233/buscar"> 
                    <li><a>Rotas dinâmicas</a></li>
                </Link>

                <Link href="/routes/id/id"> 
                    <li><a>Rotas dinâmicas page id</a></li>
                </Link>

           </ul>
        </>
    )
}