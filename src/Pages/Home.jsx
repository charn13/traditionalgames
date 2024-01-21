import React from 'react'
import {Header, Footer, ProdcutItem} from '../Components/index'

const Home = (props) => {

  const productarry = [
    
    {
      id:1,
      name:"Gilli Danda",
      img :"https://en-media.thebetterindia.com/uploads/2016/04/3-16.jpg",
      definition:"Gilli Danda is a game very similar to cricket and baseball; its popularity in India once rivalled that of cricket. The game is played with a small piece of wood reduced on both sides known as gilli and a large piece of wood that is used to hit  the gilli known as danda. The aim of the game is to hit the gilli as far as possible."
    },
    {
      id:2,
      name:"Kancha or Marbles",
      img: "https://en-media.thebetterindia.com/uploads/2016/04/1-34.jpg",
      definition:"This is still a popular game among kids in rural areas. The game is played with round glass marbles and the motive is to collect as many marbles as possible by shooting and striking other marbles with the ones you have."
    },
    {
      id:3,
      name:"Chain",
      img: "http://www.acolorfulriot.com/wp-content/uploads/2020/06/Chain-Chain-game.jpg",
      definition:"Chain is another classic children’s game, although it is losing popularity now. The game consists of a ‘denner’, whose aim is to catch the other players. Once the denner catches a player, the player becomes part of a chain(which is formed by holding hands) and then has to help the denner in catching the remaining players."
    },
    {
      id:4,
      name:"Pithu",
      img: "https://en-media.thebetterindia.com/uploads/2016/04/1-32.jpg",
      definition:"A very popular game among kids in India at one time. It involves a ball and a pile of flat stones (which are stacked on top of each other). One member of a team throws the ball at the stack to knock the stones over. The team  then tries to restore the pile of stones while the opposing team ( known as the hitters) throws the ball at them. If the ball touches a person, he is out and his team continues without him. "
    },
    {
      id:5,
      name:"Lattoo",
      img: "https://d3i71xaburhd42.cloudfront.net/592498467c51fd46c7bddb9d412c1c0590151969/8-Figure2-1.png",
      definition:"Lattoo is a game that involves spinning a wooden top (lattoo), which has grooves in it lower half and a nail at the bottom, on which it spins. A thick string  is wrapped around the grooves on lower half and pulling the string makes the top spin. "
    },
    
    {
      id:6,
      name:"Langdi",
      img: "https://sportxin.files.wordpress.com/2021/04/untitled-5-2-1.jpg",
      definition:"Lattoo is a game that involves spinning a wooden top (lattoo), which has grooves in it lower half and a nail at the bottom, on which it spins. A thick string  is wrapped around the grooves on lower half and pulling the string makes the top spin. "
    }
    

  ]





  return (
    <>
    <Header />
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner hght ">
    <div className="carousel-item active">
      <img src="https://en-media.thebetterindia.com/uploads/2016/04/1-34.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://en-media.thebetterindia.com/uploads/2016/04/3-16.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://en-media.thebetterindia.com/uploads/2016/04/7-6.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


<section>
    <div className='container'>

        <h3 className='fw-bold py-5'></h3>
        <div className='row hght'>

            {productarry.map((item, index)=>(
              <ProdcutItem 
              key={index} 
              productname={item.name} 
              productimg={item.img} 
              productinfro={item.definition} 
              
              productid={item.id}

            
              />
            
            )
            
            
            )}

          


            

           
        

        </div>
    </div>
</section>





    <Footer />
    </>
  )
}

export default Home