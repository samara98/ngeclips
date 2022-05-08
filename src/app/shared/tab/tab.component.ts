import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  public tabTitle: string = '';
  public active: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
