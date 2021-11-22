export class TodoItem {
  // Declaration of variables of string and boolean type
  task: string;
  complete: boolean;

  // constructor for our model
  constructor(taskVal: string, completeVal:boolean = false) {
    this.task = taskVal;
    this.complete = completeVal;
  }
}
