
//==import from src==//
import React from 'react';
import './ListItems.css';
//==================//



  //==function of ListItems==//
  function ListItems(props){
  
    const items= props.items;
    const listItems = items.map(item =>
        
        {
           return <div class="list" key={item.key}>
             <p>
               <input type ="text" id ={item.key} value={item.text}
               onChange = {
                 (e) => {
                   props.Edititem(e.target.value, item.key);
                 }
               }
               />
             
             
        
            <span  >

                   <button  className = "btndelete" type="submit" 
                   onClick = { () => props.RemoveItem(item.key)
                   }>   Delete</button>
                     
            </span>
           
             </p>
           
           
           </div>
         

    })
  
    return (

        <div>{listItems}</div>

    )
  }

  export default ListItems;