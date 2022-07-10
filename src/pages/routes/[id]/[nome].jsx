import { useRouter } from 'next/router'

export default function nome() {

    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.nome

    console.log(router);

    return (
        <>
           <h1>Router {nome} {codigo} Buscar!!!</h1>
        </>
    )
}