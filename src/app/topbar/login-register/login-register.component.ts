import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
// validators to be written from https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325
  formerror = null;
  showFormLogin = true;
  socialLoginBtn = 'google,github,facebook-f,linkedin-in,twitter'.split(',');
  profileForm = new FormGroup({
    firstName: new FormControl("Shraddheya"),
    lastName: new FormControl("Shrivastava"),
    email: new FormControl("shraddheya@outlook.com"),
    password: new FormControl("2totootwO"),
    password2: new FormControl("2totootwO"),
    remember: new FormControl(),
  })
  constructor( private ds: DataService ) { }

  ngOnInit(): void {
    (window as any).gg = () => {
      console.log(this.profileForm);
      console.log(this.profileForm.valid);
    };
  }
  // api for post request found in https://youtu.be/fhRdqbEXp9Y?t=3111
  // mongo connection here https://www.youtube.com/watch?v=PFP0oXNNveg
  onSubmit() {
    if (this.showFormLogin) {
      this.ds.postLogin(this.profileForm.value).subscribe((res: any) => {
        console.log(res);
        this.formerror = res.err;
        this.ds.user = res.user;
      });
    } else {
      this.ds.postSignup(this.profileForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.err) {
          this.formerror = res.err;
          setTimeout(() => {
            this.showFormLogin = true;
            this.formerror = null
          }, 1000);
        }
      });
    }
  }
}
