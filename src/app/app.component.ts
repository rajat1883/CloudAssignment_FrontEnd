import { Component, OnInit } from '@angular/core';
import { IUser } from './Booking';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  addView = false;
  showHide = 'Show';
  newUser: IUser = { firstName: '', lastName: '', emailAddress: '', phoneNumber: '', age: 0, address: '' };

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private userService: UserServiceService) { }

  getUsers() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
    console.log(this.users);
  }

  toggleAddView() {
    this.addView = !this.addView;
    if (this.showHide === 'Show') {
      this.showHide = 'Hide';
    } else {
      this.showHide = 'Show';
    }
  }
  addUser() {
    this.userService.addUser(this.newUser).subscribe(
      data => {
        console.log(data);
        this.getUsers();
        this.addView = false;
        this.showHide = 'Show';
      }
    );
  }

}
