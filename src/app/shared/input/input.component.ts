import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  public control: FormControl = new FormControl();

  @Input()
  public type = 'text';

  @Input()
  public placeholder = '';

  @Input()
  public format = '';

  constructor() {}

  ngOnInit(): void {}
}
