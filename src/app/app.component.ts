import { Component, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  public userList : Array<any> = [];
  public user = {
      name : null,
      email : null,
      address : null
    }

  
  addNew(){
    this.userList.push(this.user);
    this.user = {
      name : null,
      email : null,
      address : null
    }
    console.log(this.user);
  }

  onDelete(i : number){
    this.userList.splice(i, 1);
  }
}
 