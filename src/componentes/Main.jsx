import React from "react";

export default function Main(){
    return(
        <>
            <main>
                <section className="formulario">
                   <div className="campos">
                    <input type="text" placeholder="Digite sua tarefa" />
                   </div>

                   <div className="campos">
                        <button>Adicionar Tarefa</button>
                   </div>
                </section>
            </main>
        </>
    );
}