import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{ message }}</h1>',
})

export class AppComponent {
  users: any;

  constructor(private dataService: DataService) {
    this.GetAllUsers();
  }

  private GetAllUsers(){
    this.dataService.getAllData().subscribe(data=> {
      this.users = data.data;
    })
  }
}