import { useEffect } from "react";
import { useRef } from "react";

const MenuComponent = ({ list, categoryName }) => {

    const myRef = useRef();

    // const scrollToComponent = () => {
    //     if (window.location.hash === '#' + categoryName) {
    //         myRef.current.scrollIntoView();
    //         myRef.current.focus();
    //     }
    // }

    useEffect(() => {
        if (window.location.hash === '#' + categoryName) {
            myRef.current.scrollIntoView();
            myRef.current.focus();
        }
    }, [categoryName])

    return (
        <div className={`${categoryName}`}>
            <h1 ref={myRef} id={`${categoryName}`} className='category-title'>{categoryName}</h1>
            <ul className="dishes-list">
                {list.map(dish => (
                    <li className="dish">
                        <div className="dish-content">
                            <h3 className="dish-name">{dish.name}</h3>
                            {(dish.options !== []) && <span className="dish-price">{dish.price}</span>}
                        </div>
                        {<p className="dish-description">{dish.description}</p>}
                        {dish.options &&
                            <ul className="dish-options-list">
                                {(dish.options).map(option => (<span className="dish-option"><li className="option-name">{option.optName}</li><span className="option-price">{option.optPrice}</span></span>))}
                            </ul>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuComponent;
