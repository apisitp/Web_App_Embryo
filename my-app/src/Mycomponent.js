import React, { useState } from 'react';

function MyComponent({ selectedModel, imagepath }) {
  const [prediction, setPrediction] = useState(null);
  const handlePrediction = async () => {
    let url;
    console.log(selectedModel);
    console.log(imagepath);
    if (selectedModel === "InceptionV3") {
      url = "http://127.0.0.1:8000/predict_inception";
    } else if (selectedModel === "Xception") {
      url = "http://127.0.0.1:8000/predict_xception";
    } else {
      console.error('Invalid model selected');
      return;
    }
    const data = {
      image_path: imagepath
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setPrediction(responseData);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePrediction}>Grade</button>
      {prediction && (
        <div>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
