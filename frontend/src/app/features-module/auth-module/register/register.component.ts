import { Component, OnInit, ViewChild } from '@angular/core';

// material
import { MdInput } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: MdInput;
  constructor() { }

  ngOnInit() {
    this.usernameInput.focus();
  }

}
