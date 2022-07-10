import { useRouter } from 'next/router'

export default function Params() {

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    console.log(router);

        return (
        <>
           <h1>Rotas Params nome {nome} Id {id}</h1>
        </>
    )
}   