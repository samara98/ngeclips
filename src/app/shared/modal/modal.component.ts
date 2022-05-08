import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  public modalId = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(e: Event) {
    e.preventDefault();
    this.modal.toggleModal(this.modalId);
  }
}
