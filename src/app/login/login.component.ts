import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public id_token = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUser() {
      if (typeof(window.id_token) != "undefined") {
        this.id_token = window.id_token;
        this.router.navigate(['userInfo', this.id_token]);
      }
      else{
        alert('You must sign in first');
      }
  }
}
