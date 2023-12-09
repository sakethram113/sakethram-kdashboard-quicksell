import React from 'react'
import './Card.css';
import userImg from '../../userImg/download.png'

const Card = () => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>CAM1</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={userImg} alt="UserImage" />
                <div className="showStatus"></div>
            </div>

        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>Heading to the card</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
        <div className="tags color-grey"><span>•</span></div>
            
        </div>
    </div>
  )
}

export default Card