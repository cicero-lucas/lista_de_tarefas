import {React,useState } from "react";

export default function Main(){
    const [tarefa,setTarefa]=useState([])
    const [texto,setTexto]=useState('')

    function addTarefa(form){
        form.preventDefault()
        setTarefa([...texto])
        setTexto('')
        document.getElementById('itarefa').focus()
        console.log(tarefa)
        
    }

    return(
        <>
            <main>
                <form className="formulario" onSubmit={(form)=>addTarefa(form)}>
                   <div className="campos">
                    
                    <input type="text" id="itarefa" placeholder="Digite sua tarefa" value={texto}  onChange={(text)=>setTexto(text.target.value)}/>
                   </div>

                   <div className="campos">
                        <button type="submit">Adicionar Tarefa</button>
                   </div>
                </form>

                <section>
                    {tarefa.length<1
                        ?
                        <div className="aviso">
                            <p>Sem Tarefas no Momento</p>
                        </div>
                        :
                        <div className="teste">
                        {tarefa.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                    }
                </section>

                
            </main>
        </>
    );
}