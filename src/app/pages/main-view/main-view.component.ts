import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board("Personal Board", [
    new Column("Ideas", ["Task 1 ", " Task 2", "Task 3"]),
    new Column("Planned", ["Task 1", "Task 2", "Task 3"]),
    new Column("In Process", ["Task 1", "Task 2", "Task 3", "Task 4"]),
    new Column("Done", ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"])
  ]);

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
