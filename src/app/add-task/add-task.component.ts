import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask!: string;

  //@Output()
  //emitTask = new EventEmitter<string>();
  //constructor() { }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  add(){
    //this.emitTask.emit(this.newTask);
    const task: Task = ({name: this.newTask, created: new Date().toLocaleString(), isDone: false})
    this.tasksService.add(task);
    this.newTask = '';
  }

}
