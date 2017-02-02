import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  public productId:string;

  constructor(private router:Router,
              private tokenStorage:TokenStorage,
              private auth:Auth,
              private activatedRoute:ActivatedRoute) {
  }

  public ngOnInit():void {
    this.activatedRoute.params.subscribe(params => this.productId = params['id'] || '');
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['user/products', {id: this.productId}]);
    }
    this.buildForm();
  }

  public onSubmit():void {
    if (this.form.valid) {
      this.auth.signIn(this.form.value.login, this.form.value.password)
        .subscribe(
          response => {
            if (response.status === 200) {
              this.tokenStorage.setAuthToken(response.json().user_id);
              this.router.navigate(['user/products', {id: this.productId}]);
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
