import React from 'react';

const Quotebutton = ({changequote, randomColors}) => {
    return (
        <div className='boxbutton'>
            <button className='button' onClick={changequote} style={{background:randomColors}}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Quotebutton;