import React, { useEffect, useRef, useState} from "react";

const TakePhoto = () => {
    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [hasPhoto, sethasPhoto] = useState(false)

    const getVideo = () =>{
        navigator.mediaDevices.getUserMedia ({ 
            video: { width: 1920, height: 1080}
        })
        .then(stream =>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const takePhoto = () => {
        const width =  414
        const height = width / (16/9)

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        sethasPhoto(true);
    }

    useEffect(() => {
        getVideo()
    }, [videoRef]);

    const closePhoto = () =>{
        let photo = photoRef.current;
        let ctx = photo.getContext('2d')
        ctx.clearRect(0,0, photo.width, photo.height)
        sethasPhoto(false)
    }

    return ( 
        <div>
            <div>
                <video ref={videoRef}></video>
                <button onClick={takePhoto}>Snap</button>        
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto}>Close</button>        
            </div>
        </div>
     );
}
 
export default TakePhoto;