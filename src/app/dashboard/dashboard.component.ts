import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected: Date | null | undefined;
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 1, 0);
  email:any;
  contact:any;
  constructor(private _snackBar: MatSnackBar) { }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
    this.email  ='abdulwahedansari@gmail.com';
    this.contact  ='+1 660 528 0042';
  }
  
}
