import * as React from 'react';
import './../../css/recomment/recomment.css';

// Reusable component for detailrec
function DetailRec({ imageSrc, text }) {
    return (
        <div className='detailrec'>
            <img className='recimg' src={imageSrc} alt='Recommendation' />
            <div className='rectext'>{text}</div>
        </div>
    );
}

export default function Recomment() {
    const recData = [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lasdasdur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sasdpisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit inventore a, ea molestiae perspiciatis voluptas cupiditate similique. Fugit temporibus qui voluptas eos voluptatibus pariatur molestias harum accusantium iure possimus."
    ];

    return (
        <div className='recomment-container'>
            <div className='title-container'>
                <div className='title-reccomend'>Recommendation</div>
            </div>
            {recData.map((text, index) => (
                <DetailRec 
                    key={index} 
                    imageSrc="src/assets/text.png" 
                    text={text} 
                />
            ))}
        </div>
    );
}
