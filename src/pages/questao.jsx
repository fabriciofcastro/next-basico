import { useEffect, useState } from "react";

export default function questao1() {

    const [questao, setQuestao] = useState(null)
    
   useEffect(() => {
        fetch("http://localhost:3000/api/questao/123")
            .then(resp => resp.json())
            .then(setQuestao)

   }, []);

   
    function renderizarResposta() {
        if(questao) {
            return questao.respostas.map( (resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
       
        return false
   }
    

    return (

        <div>
            <h1>Questao</h1>

            <span>{questao?.id } - {questao?.enunciado}</span>

            <ul>
                {renderizarResposta()}
            </ul>
        </div>
    )
}

