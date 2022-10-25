import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `<button data-test="login" (click)="signIn()">SignIn</button>
    <br />
    <button data-test="logout" (click)="signOut()">SignOut</button>`,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AuthService
  ) {}

  ngOnInit(): void {}

  signIn(): void {
    this.service.signIn();
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.router.navigate([returnUrl || '/']);
  }

  signOut(): void {
    this.service.signOut();
  }
}
