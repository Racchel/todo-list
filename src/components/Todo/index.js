import React, { Component } from 'react'
import { Item, ButtonContent, Button } from './style'

export default class Todo extends Component {

   constructor(props) {
      super(props)
      this.key = props.key
      this.item = props.item
      this.editTodo = props.editTodo
      this.removeTodo = props.removeTodo
      this.checkTodo = props.checkTodo
   }
   render() {
      return (
         <Item key={this.item.id}>
            <p>{ this.item.todo }</p>

            <ButtonContent>
               <Button onClick={() => (this.editTodo(this.item, this.key))}>
               ✏️
               </Button>

               <Button 
                  onClick={() => (this.removeTodo(this.item.id))}
               >
               🗑
               </Button> 

               <Button 
                  onClick={() => (this.checkTodo(this.item.id))}
                  bgColor={ this.item.isDone? 'green': 'red' }
                  width='4rem'
               >
               { this.item.isDone? 'Feito': 'A fazer' }
               </Button>
            </ButtonContent>
         </Item>
      )
   }
}
