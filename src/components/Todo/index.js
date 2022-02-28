import React, { Component } from 'react'
import { Item, ButtonContent } from './style'

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
               <button onClick={() => (this.removeTodo(this.item.id))}>
               ⌫
               </button> 

               <button onClick={() => (this.checkTodo(this.item.id))}>
               { this.item.isDone? 'Feito': 'A fazer' }
               </button>
            </ButtonContent>
         </Item>
      )
   }
}
