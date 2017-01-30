import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl:'home.component.html',
  animations:[],
  providers:[]
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {
  }

  public ngOnInit():void {
    return null;
  }

  public goToSignIn():void {
    return null;
  }

}
