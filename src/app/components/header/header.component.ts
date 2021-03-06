import {Component, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {TokenStorage} from '../../auth/TokenStorage';

@Component({
  selector:'h4fe-header-component',
  templateUrl:'header.component.html',
  styles:[require('!css-loader!resolve-url-loader!postcss-loader!sass-loader?sourceMap!./header.component.scss')[0][1]]
})
export class HeaderComponent {

  private loggedIn:boolean = false;
  private isHomePage:boolean = true;

  constructor(private router:Router,
              private tokenStorage:TokenStorage,
              private cdRef:ChangeDetectorRef) {
    this.loggedIn = !!this.tokenStorage.getAuthToken();
    this.tokenStorage.hasToken.subscribe((token:boolean) => {
      this.loggedIn = token;
      this.cdRef.detectChanges();
    });

    router.events.subscribe((value:any) => {
      if (value instanceof NavigationStart) {
        this.isHomePage = value.url === '/home' || value.url === '/';
      }
    });
  }

  public goToHomePage():void {
    this.router.navigate(['home']);
  }

  public goToSignIn():void {
    this.router.navigate(['user/signin']);
  }

  public goToSignUp():void {
    this.router.navigate(['user/signup']);
  }

  public goToLogOut():void {
    this.tokenStorage.removeAuthToken();
    this.router.navigate(['home']);
  }

}
