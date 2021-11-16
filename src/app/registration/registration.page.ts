import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor( public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }
  public password='';
  public email='';
  SignUp(email, password){
    this.authService.RegisterUser(email, password)      
      .then((res) => {
        this.authService.SendVerificationMail()
        this.router.navigate(['verify-email']);
        // Do something here
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
