import React, {useEffect} from 'react'
import './main.css'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:2,
    imgSrc: img2,
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:3,
    imgSrc: img3,
    desTitle: 'Great barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:4,
    imgSrc: img4,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  
  {
    id:5,
    imgSrc: img5,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:6,
    imgSrc: img6,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:7,
    imgSrc: img7,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:8,
    imgSrc: img8,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:9,
    imgSrc: img9,
    desTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'The option of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities.'
  },
]

const Main = () =>{

  useEffect(()=>{
      Aos.init({duration: 2000})
  
    }, [])
  return(
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* { array can be created 
        this this page
        } */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return (
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">

                <div className='imageDiv'> 
                  <img src={imgSrc} alt={destTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker  className="icon"/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>

                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                   </div>

                   <div className="desc">
                    <p>{description}</p>

                   </div>

                   <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className="icon" /></button>
                  </div>

                
                </div>
            )

          })
        }
      </div>

    </section>
  )
}

export default Main