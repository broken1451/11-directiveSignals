import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/userService.service';
import { UserResponse } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {

  private userService = inject(UserService);
  public userId = signal(1);
  public currentUser = signal<UserResponse | undefined>(undefined);
  public userWasFound = signal<boolean>(true);
  public fullName = computed<string>(() => {

    if (!this.currentUser()) {
      return 'User not found';
    }

    return `${this.currentUser()?.data.first_name} ${this.currentUser()?.data.last_name}`;
  });

  constructor() { }

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
  
    if (id <= 0) {
      // usar set cuando no me interesa el valor anterior que tenga el signal
      // this.userWasFound.set(false);
      return;

    }
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userService.getUserById(this.userId()).subscribe({
      next: (user) => {
        // usar set cuando no me interesa el valor anterior que tenga el signal
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: (error) => {
        console.error(error);
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      }
    });
  }


}
