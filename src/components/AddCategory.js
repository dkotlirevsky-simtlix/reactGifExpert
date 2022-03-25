import {useState} from "react";
import '../index.css'
import PropTypes from "prop-types";


export function AddCategory({setCategories}) {

    const [category, setCategory] = useState('');

    const addCategory = (event) => {
        event.preventDefault();
        setCategories(categories => [...categories, category ]);
        setCategory('');
    }

    return (
        <form onSubmit={addCategory}>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}/>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
