import React, { useState } from 'react';
import MyComponent from './Mycomponent';

function ModelSelector({ imagepath }) {
    const [selectedModel, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    //console.log(selectedModel);
    return (
        <div>
            <button
                className='button'
                onClick={() => handleButtonClick("InceptionV3")}

                style={{ backgroundColor: selectedModel === "InceptionV3" ? 'white' : '#343434', color: selectedModel === "InceptionV3" ? '#343434' : 'white' }}
            >
                InceptionV3 {selectedModel === "InceptionV3"}
            </button>
            <button
                className='button'
                onClick={() => handleButtonClick("Xception")}
                style={{ backgroundColor: selectedModel === "Xception" ? 'white' : '#343434', color: selectedModel === "Xception" ? '#343434' : 'white' }}
            >
                Xception {selectedModel === "Xception"}
            </button>
            <MyComponent selectedModel={selectedModel} imagepath={imagepath}/>
        </div>
    );
}

export default ModelSelector;