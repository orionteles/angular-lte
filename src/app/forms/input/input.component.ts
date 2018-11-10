import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() config: {};


  teste = new FormControl('');

  constructor() { }

  ngOnInit() {
    console.log(this.label);
    console.log(this.name);
    
  }

}
