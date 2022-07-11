import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Params() {

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    console.log(router);

        return (
        <>
           <h1>Rotas dinâmicas nome {nome} Id {id}</h1>

           <Link href="/routes/id/indexx" >
                <button>Voltar</button>
           </Link>
        </>
    )
}   