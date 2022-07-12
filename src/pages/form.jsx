import { useState } from "react"

export default function form() {

        const [nome, setNome] = useState("")
        const [idade, setIdade] = useState(0)
        const [usuarios, setUsuarios] = useState(0)

        async function salvarUsuario() {
          
          await fetch('/api/form', {
                method: 'POST',
                body: JSON.stringify({ nome, idade })
            })

            const resp = await fetch("/api/form")
            const usuarios = await resp.json()
            setUsuarios(usuarios)

            setIdade("")
            setNome(0)
        }

        function renderizarUsuarios() {
            return usuarios.map(( usuario, i ) => {
                return <li key={i}> 
                            { usuario.nome } tem { usuario.idade } anos
                        </li>
            }) 
        }

    return (
        <div>
            <h1>Integração com API #02</h1>

            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)}
            />
            
            <input type="number" value={idade} 
                onChange={e => setIdade(+e.target.value)} 
             />
             <button onClick={salvarUsuario}>Enviar</button>

             <ul>
                {renderizarUsuarios()}
             </ul>
        </div>
    )
}