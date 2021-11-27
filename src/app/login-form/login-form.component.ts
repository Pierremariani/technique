import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
//You can  see what are the value of your Username and password when you Inspect into Console
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username, password);
    return false;
// Right Login and password Should get you to the dashboard 
    if (username == 'test' && password == 'technique') {
      this.router.navigate(['dashboard']);

    }
  }

}
