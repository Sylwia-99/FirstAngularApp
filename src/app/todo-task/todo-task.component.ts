import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  //@Input()
  //taskLists: Array<string> = [];
  //@Output()
  //emitDone = new EventEmitter<string>();
  //@Output()
  //emitRemove = new EventEmitter<string>();

  taskLists: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe(tasks=>{
        this.taskLists = tasks.slice().filter(t => t.isDone ===false);
      });
  }

  ngOnInit(): void {
  }

  remove(task: Task){
    this.tasksService.remove(task);
    //this.emitRemove.emit(task);
  }

  done(task: Task){
    task.end = new Date().toLocaleString();
    this.tasksService.done(task);
    //this.emitDone.emit(task);
  }

  getColor(): string{
    return this.taskLists.length >= 5 ? '#ba4ba6' : '#c8ff00'
  }
}
