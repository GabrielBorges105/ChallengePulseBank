import { UserService } from './../../services/user/user.service';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User = { fullname: '', username: '', userId: 0 };

  constructor(private profileService: UserService) {}

  ngOnInit(): void {
    this.profileService.profile().subscribe((user) => {
      this.user = user;
    });
  }
}
