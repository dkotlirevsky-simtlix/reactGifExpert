
import card from '../index.css'

export function GifGridItem( { id, title, url }) {

    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p> { title }</p>
        </div>
    );
};

