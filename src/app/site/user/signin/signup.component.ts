import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../auth/TokenStorage';
import {Auth} from '../../../auth/Auth';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'h4fe-signup-component',
  templateUrl: 'signup.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signup.component.scss')[0][1]],
  providers: [
    Auth
  ]
})
export class SignUpComponent implements OnInit {

  public form:FormGroup;
  public error:string;

  constructor(private router:Router,
              private tokenStorage:TokenStorage,
              private auth:Auth) {
  }

  public ngOnInit():void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['user/products']);
    }
    this.buildForm();
  }

  public onSubmit():void {
    if (this.form.value.repeat_password === this.form.value.password) {
      this.auth.signUp(this.form.value.login, this.form.value.password)
        .subscribe(
          (response:any) => {
            if (response.status === 201) {
              this.tokenStorage.setAuthToken('logged-in :)');
              this.router.navigate(['user/subscribe']);
            }
            this.error = 'ERROR';
          },
          (error:Error) => this.error = 'ERROR'
        );
    }
  }

  protected buildForm():void {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      repeat_password: new FormControl('')
    });
  }

}
