import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit(): void {
    window.setTimeout(() => {
      this.cdr.detectChanges()
    }, 1000)
  }

  async logout() {
    await this.userService.logout()
    this.router.navigate(['login'])
  }

}
