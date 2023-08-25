import React from "react";
import '../estilos/Advice.css';
function Mostrar(){
    const consejo='';
    function Obtener(){
        fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const consejo = data.slip.advice;
        const advice_id= data.slip.id;
        document.getElementById('consejo1').textContent = consejo;
        document.getElementById('advice-id').textContent = `ADVICE # ${advice_id}`;
        })
    }
    Obtener()

    return(
        <div className="advice-container">
            <div className="advice-text-container">
                <p className="advice-id" id="advice-id"></p>
                <p className="advice-text" id='consejo1'></p>
            </div>
            
            <div className="icon-text"></div>
            
            <div className="advice-button-container">
                <button className="advice-button" onClick={Obtener}>
                    <div className="icon-button"></div>
                </button>
            </div>
            
        </div>
        
    )
}

export default Mostrar;