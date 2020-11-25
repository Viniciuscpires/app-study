import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'as-study-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['logout'])
  }

}
