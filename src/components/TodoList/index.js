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

  addTodo = () => {

    const { todoList, todo } = this.state

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

  editTodo = (item, key) => {
    const { todoList } = this.state
 
    item.todo = prompt(`Qual a alteração em ${item.todo}: `)
    todoList[key] = item

    this.setState({ todoList: todoList })
  }

  removeTodo = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const resp = confirm('Deseja realmente excluir esse item?')
    console.log(resp)

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

  addEnter = (e) => {
    
    if(e.keyCode === 13) {
      this.addTodo()
    }
  }

  render() {
    return (

      <Container>
        <Header>
          <Title> Lista de Tarefas </Title>
        </Header>

        <Form onSubmit={this.addTodo} onKeyDown={(e) => this.addEnter(e)}>
          
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
              this.state.filterDone && this.state.filterToDo ?
              this.state.todoList.map((item, index) => (              
                <Todo key={index} item={item} editTodo={this.editTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
              : this.state.filterDone ?
              this.state.listFilteredByDone.map((item, index) => (
                <Todo key={index} item={item} editTodo={this.editTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
              : this.state.filterToDo ?
              this.state.listFilteredByTodo.map((item,index) => (              
                <Todo key={index} item={item} editTodo={this.editTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
              : this.state.todoList.map((item, index) => (              
                <Todo key={index} item={item} editTodo={this.editTodo} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
              ))
            }
          </ItemsContent>
        </Form>
      </Container>
    )
  }
}
