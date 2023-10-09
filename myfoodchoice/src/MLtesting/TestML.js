import { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import Axios from 'axios';

const TestML = () => {
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState('')
    const [model, setModel] = useState(null)
    const [data] = useState([])
    const fileInputRef = useRef()
    const imageRef = useRef()
    const [isModelLoading, setIsModelLoading] = useState(false)

    const [name, setName] = useState('Food Name 1')
    const [kcal, setkcal] = useState(0)
    const [protein, setprotein] = useState(0)
    const [fat, setfat] = useState(0)
    const [carbohydrate, setcarbohydrate] = useState(0)
    const [saturatedfat, setsaturatedfat] = useState(0)
    const [dietfibre, setdietfibre] = useState(0)
    const [cholesterol, setcholesterol] = useState(0)
    const [sodium, setsodium] = useState(0)
    const [weight, setweight] = useState(0)

    const [name2, setName2] = useState('Food Name 2')
    const [kcal2, setkcal2] = useState(0)
    const [protein2, setprotein2] = useState(0)
    const [fat2, setfat2] = useState(0)
    const [carbohydrate2, setcarbohydrate2] = useState(0)
    const [saturatedfat2, setsaturatedfat2] = useState(0)
    const [dietfibre2, setdietfibre2] = useState(0)
    const [cholesterol2, setcholesterol2] = useState(0)
    const [sodium2, setsodium2] = useState(0)
    const [weight2, setweight2] = useState(0)
    
    const [classLabels] = useState(['Ba Chor Mee', 'Char Kway Teow', 'Chicken Rice', 'Chilli Crab', 'Laksa', 'Nasi Lemak', 'Nasi Padang', 'Roti Prata'])
    
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
            const modelJson = 'http://192.168.1.15:8080/model.json'
            const modell = await tf.loadLayersModel(modelJson);
            setModel(modell)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    useEffect(() => {
        loadModel()
    }, [])

    const identify = async () =>{
        //Do something to the image first before predicting
        const tensorImg = tf.browser.fromPixels(imageRef.current).resizeNearestNeighbor([256, 256]).toFloat();
        const tensorImg2 = tensorImg.expandDims(0);
        //Predict results
        const result = await model.predict(tensorImg2)
        const predicted_index = result.as1D().argMax().dataSync()[0];
        const predictedClass = classLabels[predicted_index];
        setResults(predictedClass)
        //Get nutritional values from database
        const id = predicted_index + 1
        await Axios.get(`http://localhost:3002/api/getFood/${id}`).then((res) =>{
            if(data.length === 0){
                data.push(res.data[0])
                setName(res.data[0].name)
                setkcal(res.data[0].kcal)
                setprotein(res.data[0].protein)
                setfat(res.data[0].fat)
                setcarbohydrate(res.data[0].carbohydrate)
                setsaturatedfat(res.data[0].saturatedfat)
                setcholesterol(res.data[0].cholesterol)
                setdietfibre(res.data[0].dietaryfibre)
                setsodium(res.data[0].sodium)
                setweight(res.data[0].weight)
            }
            else if(data.length === 1){
                data.push(res.data[0])
                setName2(res.data[0].name)
                setkcal2(res.data[0].kcal)
                setprotein2(res.data[0].protein)
                setfat2(res.data[0].fat)
                setcarbohydrate2(res.data[0].carbohydrate)
                setsaturatedfat2(res.data[0].saturatedfat)
                setcholesterol2(res.data[0].cholesterol)
                setdietfibre2(res.data[0].dietaryfibre)
                setsodium2(res.data[0].sodium)
                setweight2(res.data[0].weight)
            }
            else{
                data.push(res.data[0]) // 3 items in array, add subsequent item in the array
                data.shift() // 2 items in array, remove first item in the array

                //Setting first item in the array
                setName(data[0].name)
                setkcal(data[0].kcal)
                setprotein(data[0].protein)
                setfat(data[0].fat)
                setcarbohydrate(data[0].carbohydrate)
                setsaturatedfat(data[0].saturatedfat)
                setcholesterol(data[0].cholesterol)
                setdietfibre(data[0].dietaryfibre)
                setsodium(data[0].sodium)
                setweight(data[0].weight)
                
                //Setting 2nd item in the array
                setName2(data[1].name)
                setkcal2(data[1].kcal)
                setprotein2(data[1].protein)
                setfat2(data[1].fat)
                setcarbohydrate2(data[1].carbohydrate)
                setsaturatedfat2(data[1].saturatedfat)
                setcholesterol2(data[1].cholesterol)
                setdietfibre2(data[1].dietaryfiber)
                setsodium2(data[1].sodium)
                setweight2(data[1].weight)
                
            }
        })
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
        <p>{results}</p>
        <div style={{"textAlign": "left"}}>
            <h1>Food Comparison</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nutritional value</th>
                        <th>{name}</th>
                        <th>{name2}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kcal</td>
                        <td>{kcal}</td>
                        <td>{kcal2}</td>
                    </tr>
                    <tr>
                        <td>Protein (g)</td>
                        <td>{protein}</td>
                        <td>{protein2}</td>
                    </tr>
                    <tr>
                        <td>Fat (g)</td>
                        <td>{fat}</td>
                        <td>{fat2}</td>
                    </tr>
                    <tr>
                        <td>Carbohydrate (g)</td>
                        <td>{carbohydrate}</td>
                        <td>{carbohydrate2}</td>
                    </tr>
                    <tr>
                        <td>Saturated Fat (g)</td>
                        <td>{saturatedfat}</td>
                        <td>{saturatedfat2}</td>
                    </tr>
                    <tr>
                        <td>Dietary Fibre (g)</td>
                        <td>{dietfibre}</td>
                        <td>{dietfibre2}</td>
                    </tr>
                    <tr>
                        <td>Cholesterol (mg)</td>
                        <td>{cholesterol}</td>
                        <td>{cholesterol2}</td>
                    </tr>
                    <tr>
                        <td>Sodium (mg)</td>
                        <td>{sodium}</td>
                        <td>{sodium2}</td>
                    </tr>
                    <tr>
                        <td>Weight (g)</td>
                        <td>{weight}</td>
                        <td>{weight2}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        </div>
     );
}
 
export default TestML;