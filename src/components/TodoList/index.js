import React, { Component } from 'react'
import { 
  Container,
  Title,
  Form,
  Header,
  HeaderContent,
  CheckContent,
  Input,
  Button,
  Add,
  ItemsContent
} from './style'
import addIcon from '../../assets/addIcon.svg'
import { Todo } from '..'

export default class TodoList extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      todo: '',
      todoListRender: [],
      todoList: [],
      listFilteredByDone: [],
      listFilteredByTodo: [],
      filterDone: false,
      filterToDo: false
    }
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    console.log(e)
    console.log('entrou no addTodo')

    const { todoList, todo } = this.state
    console.log('Todo do state: ')
    console.log(todo)

    if (todo === '') return 

    const todoAdd = {
      id: Date.now(),
      todo: todo,
      isDone: false
    }

    this.setState({
      todoList: [...todoList, todoAdd],
      todo: ''
    })
  }

  removeTodo = (id) => {
    const { todoList } = this.state

    this.setState({
      todoList: todoList.filter((item) => item.id !== id )
    })
  }

  checkTodo = (id) => {
    const { todoList } = this.state

    const todo = todoList.filter((item) => item.id === id )[0]
  
    todo.isDone = !todo.isDone

    this.setState({
      todoList: [...todoList]
    })
  }

  filterByDone = () => {
    const { filterDone, todoList } = this.state
    
    const listFilteredByDone = todoList.filter((item) => item.isDone)

    this.setState({
      filterDone: !filterDone,
      listFilteredByDone: listFilteredByDone
    })
  }

  filterToDo = () => {
    const { filterToDo, todoList } = this.state
    
    const listFilteredByTodo = todoList.filter((item) => !item.isDone)

    this.setState({
      filterToDo: !filterToDo,
      listFilteredByTodo: listFilteredByTodo
    })
  }


  render() {
    return (

      <Container>

        <Header>
          <Title> Lista de Tarefas </Title>
        </Header>

        <Form onSubmit={this.addTodo}>
          
          <HeaderContent>
            <Input 
              width='60%'
              type='text' 
              onChange={(e) => this.handleChange(e)} 
              value={ this.state.todo }
            />

            <Add 
              onClick={this.addTodo}
              src={addIcon}
            />
            
            <CheckContent>
              <div>
                <Input 
                  width='18px'
                  type="checkbox" 
                  onClick={() => (this.filterByDone())}
                /> 
                <span> Filtrar por feito </span>
              </div>

              <div>
                <Input 
                  width='18px'
                  type="checkbox" 
                  onClick={() => (this.filterToDo())}
                /> 
                <span> Filtrar por a fazer </span>
              </div>
            </CheckContent>
          </HeaderContent>
          
          <ItemsContent>
            { 
              this.state.filterDone
              ? this.state.listFilteredByDone.map((item) => (
                <Todo key={item.id} item={item} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
              : this.state.filterToDo ?
              this.state.listFilteredByTodo.map((item) => (              
                <Todo key={item.id} item={item} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
              : this.state.todoList.map((item) => (              
                <Todo key={item.id} item={item} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
            }
          </ItemsContent>
        </Form>
      </Container>
    )
  }
}
