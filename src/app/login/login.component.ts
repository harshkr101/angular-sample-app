import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user =  {
    username: '',
    password: '',
    remeber:  false
  };

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Username : ',this.user);
    this.dialogRef.close();
  }

}
