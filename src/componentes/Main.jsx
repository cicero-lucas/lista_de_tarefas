import {React,useState } from "react";

export default function Main(){
    const [tarefa,setTarefa]=useState([])
    const [texto,setTexto]=useState('')

    function addTarefa(form){
        form.preventDefault()
        setTarefa([...tarefa,{text:texto,comp:false}])
        setTexto('')
        document.getElementById('itarefa').focus()
        console.log(tarefa)
    }

    const delTarefa= (index)=>{
        const listaAux=[...tarefa]
        listaAux.splice(index,1)
        setTarefa(listaAux)
    }

    const MarkTarefa= (index)=>{
        const listaAux=[...tarefa]
        listaAux[index].comp=!listaAux[index].comp
        setTarefa(listaAux)
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
                       
                        
                            <div className="caixaItem">

                                {(tarefa).map((item, index) => (
                                    <div key={index} className={(item.comp)?'item mark': 'item'}>

                                        <div key={index} className="tarefa "  onClick={()=>MarkTarefa(index)}>
                                            {item.text}</div>

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