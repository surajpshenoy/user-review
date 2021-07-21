import React, { useState } from 'react'
import peopleData from './Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

const [index, setIndex] = useState(1)   
const {text, name, image, job} = peopleData[index];

return (
<article className="review">
    <div className="img-container">
    <img src={image} alt={name} className="person-img"></img>
    <span className="quote-icon"><FaQuoteRight/></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p> 
    <p className="info">{text}</p>
</article>


);
}

export default Review;