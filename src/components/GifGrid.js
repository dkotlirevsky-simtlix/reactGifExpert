
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export function GifGrid({category}) {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <div >
            <h3>{category}</h3>

            <div className="card-grid">
                {!loading? images?.map((img) => <GifGridItem key={img.id} {...img}/>): "loading.."}
            </div>
        </div>

    );
};
