import { useEffect, useState } from "react";
import MenuComponent from "../components/MenuComponent";

const Menu = ({ menuList }) => {

    const [appetizers, setAppetizers] = useState(null)
    const [soups, setSoups] = useState(null)
    const [entrees, setEntrees] = useState(null)
    const [drinks, setDrinks] = useState(null)
    const [desserts , setDesserts] = useState(null)
    const [sidesSalads, setSidesSalads] = useState(null)

    useEffect(() => {
        if(menuList){
            setEntrees(menuList.filter(item => (item.category === "Entrees")))
            setAppetizers(menuList.filter(item => (item.category === "Appetizers")))
            setDrinks(menuList.filter(item => (item.category === "Drinks")))
            setSoups(menuList.filter(item => (item.category === "Soups")))
            setSidesSalads(menuList.filter(item => (item.category === "Sides & Salads")))
            setDesserts(menuList.filter(item => (item.category === "Desserts")))
        }
    }, [menuList])

    return (
        <div className="menu">
            <h1 className="menu-page-title"> Menu </h1>
                <div className="menuList">
                    { appetizers && <MenuComponent list={appetizers} categoryName={"Appetizers"}/>}
                    { soups && <MenuComponent list={soups} categoryName={"Soups"}/>}
                    { entrees && <MenuComponent list={entrees} categoryName={"Entrees"}/>}
                    { drinks && <MenuComponent list={drinks} categoryName={"Drinks"}/>}
                    { desserts && <MenuComponent list={desserts} categoryName={"Desserts"}/>}
                    { sidesSalads && <MenuComponent list={sidesSalads} categoryName={"Sides & Salads"}/>}
                </div>
        </div>
    );
}

export default Menu;