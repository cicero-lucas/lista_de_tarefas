import {React,useState } from "react";

export default function Main(){
    const [tarefa,setTarefa]=useState([])
    const [texto,setTexto]=useState('')

    function addTarefa(form){
        form.preventDefault()
        setTarefa([...tarefa],{text:texto,comp:false})
        setTexto('')
        document.getElementById('itarefa').focus()   
    }

    const delTarefa= (index)=>{
        const listaAux=[...tarefa]
        listaAux.splice(index,1)
        setTarefa(listaAux)
        console.log(listaAux)
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
                    {tarefa.length>=1
                        ?
                       
                        
                            <div>
                                {Object.values(tarefa).map((item, index) => (
                                    <div key={index} className="item">
                                        <p key={index} className="tarefa">{item}</p>
                                        <div className="btnd ">
                                            <button onClick={()=>delTarefa(index)}>Deletar</button></div>
                                    </div>
                                
                                ))}
                            </div>
                       
                       
                        
                     
                        :

                    <div className="aviso">
                        <p>Sem Tarefas no Momento</p>
                    </div>
                        
                    }
                </section>

                
            </main>
        </>
    );
}