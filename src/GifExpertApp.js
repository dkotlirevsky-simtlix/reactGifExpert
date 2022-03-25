import {useState} from "react";
import { AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

function GifExpertApp() {
    const [categories, setCategories] = useState(['Rick and morty']);

    return (
    <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ul>
            {categories.map((cat, idx) =>
                <GifGrid
                    key={cat}
                    category={cat}/>) }
        </ul>

    </>
  );
}

export default GifExpertApp;
