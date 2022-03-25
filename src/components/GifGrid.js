import {useEffect, useState} from "react";
import {GifGridItem} from "./GifGridItem";

export function GifGrid({category}) {
    const giphy_api_key='QUVkEfrqtDFSg4kdsWIiDuE1pfZItSdR';
    const urlSearch ="api.giphy.com/v1/gifs/search";

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs()
    },[])


    const getGifs = async () => {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?key=${giphy_api_key}&q=${category}&limit=12`)
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    };


    return (
        <div >
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((img) => <GifGridItem key={img.id} {...img}/>)}
            </div>
        </div>

    );
};
