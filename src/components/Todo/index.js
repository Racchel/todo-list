import React, { Component } from 'react'
import { Item, ButtonContent, Button } from './style'

export default class Todo extends Component {

   constructor(props) {
      super(props)
      this.item = props.item
      this.removeTodo = props.removeTodo
      this.checkTodo = props.checkTodo
   }
   render() {
      return (
         <Item key={this.item.id}>
            { this.item.todo } 

            <ButtonContent>
               <Button 
                  onClick={() => (this.removeTodo(this.item.id))}
               >
               🗑
               </Button> 

               <Button 
                  onClick={() => (this.checkTodo(this.item.id))}
                  bgColor={ this.item.isDone? 'green': 'red' }
               >
               { this.item.isDone? 'Feito': 'A fazer' }
               </Button>
            </ButtonContent>
         </Item>
      )
   }
}
