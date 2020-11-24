import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'as-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
