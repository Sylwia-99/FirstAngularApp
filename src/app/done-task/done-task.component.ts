import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  //@Input()
  //taskDone: Array<string> = [];

  taskDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks:Array<Task>) => {
      this.taskDone = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit(): void {
  }
}
