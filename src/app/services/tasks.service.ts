import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from '../models/task';

@Injectable()
export class TasksService{
  private taskListObserwable = new BehaviorSubject<Array<Task>>([]);

  constructor() {
  }

  add(task: Task){
    const list = this.taskListObserwable.getValue();
    list.push(task);
    this.taskListObserwable.next(list);
  }

  remove(task: Task){
    const list = this.taskListObserwable.getValue().filter(e => e !==task);
    this.taskListObserwable.next(list);
  }

  done(task: Task){
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObserwable.getValue();
    this.taskListObserwable.next(list);
  }

  getTaskListObs(): Observable<Array<Task>>{
    return this.taskListObserwable.asObservable();
  }
}
