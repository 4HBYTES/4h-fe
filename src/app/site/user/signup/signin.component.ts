import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../auth/TokenStorage';
import {Auth} from '../../../auth/Auth';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'h4fe-signin-component',
  templateUrl: 'signin.component.html',
  styles: [require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./signin.component.scss')[0][1]]
})
export class SignInComponent implements OnInit {

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
    if (this.form.valid) {
      this.auth.signIn(this.form.value.login, this.form.value.password)
        .subscribe(
          response => {
            if (response.status === 200) {
              this.tokenStorage.setAuthToken('settled');
              this.router.navigate(['user/products']);
            } else {
              this.error = 'ERROR';
            }
          },
          error => this.error = 'ERROR'
        );
    }
  }

  protected buildForm():void {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

}
