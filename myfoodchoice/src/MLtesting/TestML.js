import { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const TestML = () => {
    const [imageURL, setImageURL] = useState(null);
    
    const [model, setModel] = useState(null)
    const fileInputRef = useRef()
    const imageRef = useRef()
    const [isModelLoading, setIsModelLoading] = useState(false)

    function uploadImage(e){
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const Dynamicmodel = require('../../public/saved_model/model.json')
            const modelWeight = require('../../public/saved_model/group1-shard.bin')
            const modell = await tf.loadLayersModel(Dynamicmodel)
            console.log(modell)
            setModel(modell)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    useEffect(() => {
        loadModel()
        console.log(model)
    }, [])

    function identify () {
        console.log(imageRef.current)
        console.log(model)
    }

    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }


    return ( 
        <div>
            <input type='file' accept='image/*' capture='camera' onChange={uploadImage} ref={fileInputRef} />
        <div>
            {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
        </div>
        {imageURL && <button onClick={identify}>Identify Image</button>}
        </div>
     );
}
 
export default TestML;