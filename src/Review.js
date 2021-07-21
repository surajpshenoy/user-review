import React, { useState } from 'react'
import peopleData from './Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

const [index, setIndex] = useState(1)   
const {text, name, image, job} = peopleData[index];

const randomPersonHandler = () => {
    let random = Math.floor(Math.random() * peopleData.length);
    if (random === index){
        random = index + 1
    }
    setIndex(indexChecker(random));
}

const indexChecker = (number) => {

    if(number > peopleData.length -1)
    {
        return 0;
    }
    if (number < 0){
        return peopleData.length -1;
    }
    return number;

}
const nextButtonHandler = () => {
setIndex((index) => {
const newIndex = index + 1;
return indexChecker(newIndex);
})
}

const prevButtonHandler = () => {
    setIndex((index) => {
    const newIndex = index - 1;
    return indexChecker(newIndex);
    })
    }

return (
<article className="review">
    <div className="img-container">
    <img src={image} alt={name} className="person-img"></img>
    <span className="quote-icon"><FaQuoteRight/></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p> 
    <p className="info">{text}</p>
    <div className="button-container">
        <button className="prev-btn" onClick={prevButtonHandler}>
            <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextButtonHandler}>
            <FaChevronRight />
        </button>
    </div>
    <button className="random-btn" onClick={randomPersonHandler}>
        random
    </button>
</article>


);
}

export default Review;