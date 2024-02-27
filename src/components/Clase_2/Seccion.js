



import React from 'react'
import ListaDeTarjetas from './ListaDeTarjetas'

const Seccion = () => {
  return (
    <>
    <section>
      <h2>
        Si pedís tu tarjeta Despegar ICBC, 
        mirá todos los vuelos que podrás canjear con los puntos de bienvenida
      </h2>
      <ListaDeTarjetas />
    </section>

    <style jsx>{`

     section {
        width: 85%;
        display: flex;
        flex-direction: column;
        aling-items: center;
        font-family: Headving;
      }

       

      @media (max-width: 1024px) {
        .cards.lists {
            grid-template-columns: repeat(2, 1fr);
        }
      
      @media screen and (max-width: 581px) {
        .cards-list {
          grid-template-columns: repeat(1, 1fr);
          }
      }
       
        
      `}</style>
    </>
  )
}

export default Seccion