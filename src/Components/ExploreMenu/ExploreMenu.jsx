import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  <section id="menu"> ... </section>
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our mouthwatering menu filled with
         delicious meals made to satisfy every craving. 
         From spicy starters to sweet treats, KhanaExpress brings you a wide
          variety of freshly prepared dishes delivered right to your doorstep.</p>
    
     <div className='explore-menu-list'> 
       {menu_list.map((item,index)=>{
        return(
              <div 
                onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}
                key={index}
                 className="explore-menu-list-item"
              >
                <img 
                  src={item.menu_image} 
                  alt="" 
                  className={`${category === item.menu_name ? "active" : ""}`}
                />
                <p>{item.menu_name}</p>
              </div>
        )
       })}
           

     </div>
     <hr />
    </div>
  )
}

export default ExploreMenu