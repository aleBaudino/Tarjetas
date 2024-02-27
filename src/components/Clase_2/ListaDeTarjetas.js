
import Tarjeta from './Tarjeta'

const destinos = [
   
      {
            image: "https://media.staticontent.com/media/pictures/ba7eef5f-7d2a-4931-b69c-dad1f15151c6/300x200",
            title: "Vuelos a San Carlos de Bariloche",
            price: "43.998",
          
      },
      {
            image: "https://media.staticontent.com/media/pictures/064a9ae1-bf73-446d-a8ea-90738ca06ee4/300x200",
            title: "Vuelos a Salta",
            price: "30.998",
          
      },
      {
            image: "https://media.staticontent.com/media/pictures/a9a59f54-6208-4600-9398-a334e7808d4a/300x200",
            title: "Vuelos a Cordoba",
            price: "27.996",
          
      },
      {
            image: "https://media.staticontent.com/media/pictures/c066e0ff-a07a-4660-9c5f-957c20218606/300x200",
            title: "Vuelos a Mendoza",
            price: "43.996",
      
      },
]



const ListaDeTarjetas = () => {
  return (
    <>
    <div className="container">
     <div className="cards-list">
      {
        destinos.map((destino, index) => <Tarjeta key={index} destino={destino} />)
      }
      </div>
    </div>

      <style jsx>{`

      .container {
        display: flex;
        justify-content: center;
      }
      .cards-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        whidth: 100%;
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

export default ListaDeTarjetas