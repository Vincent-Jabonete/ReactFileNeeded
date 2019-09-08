
//== importing src ==//
import React from 'react';
import logo from './logo.svg';  // default from logo.svg
import './App.css';
import ListItems from './ListItems'; // call the list items
//==========================================//



//==to record the items and the current items with key==//
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text: '',
        key: '',
      }  
    } 
    //============================================//



    
    // == to call the function Mannage Input, add, delete and update ==//
    this.ManageInput= this.ManageInput.bind(this);
    this.InsertItem= this.InsertItem.bind(this);
    this.RemoveItem= this.RemoveItem.bind(this);
    this.Edititem= this.Edititem.bind(this);

  //=================================================/


  }

//==function to Manage of input==//
    ManageInput(e){
         this.setState({
           currentItem:{
             text : e.target.value,
             key : Date.now()
           }
         })
    }
    //==============================//


//== Insert item function ==//
    InsertItem(e){ 
      e.preventDefault();
      const  newItem = this.state.currentItem;
      console.log(newItem);

      if(newItem.text!==""){

        const newItems=[...this.state.items, newItem];
        this. setState({
          items:newItems,
          currentItem:{
            text: '',
            key: ''
          }
        })
      }
    }
    //===========================================//


    
      //== Delete function ==//
    RemoveItem(key){   

      const filteredItems = this.state.items.filter(item =>
        item.key!==key);
        this.setState({
          items: filteredItems
        })
    }
    //================================================//


    
    //== Update Function ==//

    Edititem(text, key){
       const items = this.state.items;
       items.map(item => {

            if(item.key==key){
              item.text=text;
            }
       })

        this.setState({

          items : items
        })
    }
    //====================================//




   // == function return hmtl elements==//






  render() {  
    return (
      <div class="FrontBackground">

         <header>
              <form id="FormType" onSubmit={this.InsertItem}>
                 <input type ="text" placeholder ="Type you want"
                 value= {this.state.currentItem.text}
                 onChange ={this.ManageInput}
                 />
                 <button type="submit">Insert</button>
              </form>

          
       </header>
         <ListItems items={this.state.items}
         RemoveItem = {this.RemoveItem} 
         Edititem = { this.Edititem }></ListItems>
      </div>
    );
  }
}

export default App;
