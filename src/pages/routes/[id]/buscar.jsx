import Link from 'next/link';
import { useRouter } from 'next/router'

export default function buscar() {

    const router = useRouter()
    const codigo = router.query.id

    console.log(router);

    return (
        <>
           <h1>Router {codigo} Buscar!!!</h1>

            <h1>Escolha para onde deseje ir</h1>
           
            <Link href="/routes/params"> 
                    <li>Params</li>
            </Link>

        </>
    )
}