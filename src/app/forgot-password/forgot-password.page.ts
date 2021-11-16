import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(public authService: AuthenticationService) { }
  public passwordResetEmail='';
  ngOnInit() {
  }

}
