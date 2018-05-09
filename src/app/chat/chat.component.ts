import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // name = localStorage.getItem('token');

  employers: Task [] = [];
  task: string;
  status: string;
  
  @Input() account: {task: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private mainService: TaskService,  private router: Router) { }

  ngOnInit() {
    this.employers = this.mainService.getEmployers();
  }

  addNewEmployer() {
    let user = new Task(this.task, this.status);
    this.mainService.addEmployer(user);
  }

  deleteBut(empl) {
    this.mainService.deletEmployer(empl);
  }

  exit() {
    localStorage.clear();
  }

}
