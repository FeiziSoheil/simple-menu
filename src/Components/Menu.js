import React from "react";
import menu from "../data";
import Categories from "./Categories";
import { Fade } from "react-awesome-reveal";

const Menu = ({mainCategory}) => {

  const filtermenu = ()=>{

    if(mainCategory==='all'){
      return menu;
    }else{
      return menu.filter((item)=>item.category === mainCategory);
    }
  }
  
  const filteredMenu = filtermenu();

  return (
    <div className="section-center">
     {filteredMenu&& filteredMenu.map((menuItem) => (
     <Fade cascade>
        <article className="menu-item">
       <img src={menuItem.img} className="photo" />
       <div className="item-info">
         <header>
           <h4>{menuItem.title }</h4>
           <h4 className="price">{menuItem.price}</h4>
         </header>
         <p className="item-text">{menuItem.desc}</p>
       </div>
     </article>
     </Fade>
     ))}

    </div>
  );
};

export default Menu;
