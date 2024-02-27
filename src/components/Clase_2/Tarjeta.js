


const Tarjeta = (props) => {

    const {image, title, price, }= props.destino;


  return (
    <> 
         <figure>  <a href="#">

            <img src={image} alt={title} />
           
          <figcaption>

              <p>V U E L O</p>
           
              <h2>{title}</h2>

              <p>Saliendo desde Buenos Aires </p>
           
              <p>Por Flybondi </p>
           
              <h5>Ida y vuelta </h5>

              <hr></hr>
            <div>
                <p>Precio de ida y vuelta desde </p>
                $<h4> {price} </h4>
            </div>
           
          </figcaption>
          </a>
         </figure>

      <style jsx>{`
      
        h5 {
          padding: 0.3rem;
        }
        h4 {
          font-size: 1.5rem;
          display: inline;
            }
        a { 
          text-decoration: none;
          color: black;
        }
        figure {
         
            background-color: white;
            width: 250px;
            height: 450px;
            border: 1px  rgb(238, 238, 238);
            margin: 10px;
            border-radius: 10px;
            font-family: Headving;
            font-size: 0.7rem;
          
        }
        
         
        img {
          width: 100%;
          border-radius: 10px 10px 0 0;
        }
        
        figcaption {
          padding: 1.5rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          aling-items: center;
          gap: 10px;
            
        }
        
      }

      `}</style>
</>
  )
  
}

export default Tarjeta
