import { useRouter } from 'next/router'

export default function buscar() {

    const router = useRouter()
    const codigo = router.query.id

    console.log(router);

    return (
        <>
           <h1>Router {codigo} Buscar!!!</h1>
        </>
    )
}