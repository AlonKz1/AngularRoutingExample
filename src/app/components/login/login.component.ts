import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuth$: Observable<boolean> | null = null
  redirectUrl: string = ""

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuth$
    this.activatedRoute.queryParams.subscribe(qs => {
      this.redirectUrl = qs['redirectUrl']
    })
  }

  login() {
    this.authService.login()
    if(this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl)
    }
  }

  logout() {
    this.authService.logout()
  }

}
