import React, {useState} from 'react';
import quotes from '../quotes.json';
import Quotebutton from './Quotebutton';

const QuoteBox = () => {

    const randomi = Math.floor(Math.random() * quotes.length)
    const [i, seti] = useState(randomi)
    const changequote = () => {
        const randomi = Math.floor(Math.random() * quotes.length)
        seti(randomi)
    }
    const colors = ["red", "green", "pink", "yellow", "orange"]
    const randomColors = colors[Math.floor(Math.random() * colors.length)]

    document.body.style =`background: ${randomColors}`

    return (
        <div className='container'>
            <i className="fa-solid fa-quote-left quotes-left" style={{color:randomColors}}></i>
            <div className='quotebox' style={{color:randomColors}}>
                <p className='quote'>{quotes[i].quote}</p>
                <p className='author'>{quotes[i].author}</p>
            </div>
            <div className='quotebutton'>
                <button>
                    <Quotebutton changequote={changequote} randomColors={randomColors} />
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;