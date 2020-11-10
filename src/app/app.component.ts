import { Component, OnInit } from '@angular/core';


import { TodoModel } from './models/to-do.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private todoService: TodoService){
   
  }
  todos : Array<TodoModel> = [ ];
  newTodoTitle: string;
  newTodoDescription: string;
  
  

  ngOnInit () {
    this.todoService.getTodos ()
    .subscribe((data) =>{
        this.todos = data;
    });
  }


  addTodo () {
    if ( this.newTodoTitle===undefined || this.newTodoDescription === undefined ){ 
alert("undefined")
    }
 else {
    const newTodo = new TodoModel (undefined, this.newTodoTitle, this.newTodoDescription);
    this.todoService.addTodos(newTodo)
    .subscribe ((data) =>{
      newTodo.id = data.id;
      this.todos.push(newTodo);
    })
   }
    

  }

  // addTodo () {
  //   const newTodo = new TodoModel (undefined, this.newTodoTitle, this.newTodoDescription);
  //   this.todoService.addTodos(newTodo)
  //   .subscribe ((data) =>{
  //     newTodo.id = data.id;
  //     this.todos.push(newTodo);
  //   })
    

  // }

  onDeletedTodo (id: number | string) {
    this.todoService.deleteTodos(id)
    .subscribe(() =>{
      const todo = this.todos.find((todo) => {
        return todo.id === id;
       });
       const index = this.todos.indexOf(todo);
       this.todos.splice(index,1)
    });
    
  }
   
  onCompletedTodo (data) {
    this.todoService.ediTodos(data)
    .subscribe ((todo) =>{
     

    })
  }
  // submitUserForm(userForm) {
    
  //   console.log(userForm.value)
    
  // }
}


