import { Component, OnInit, ElementRef , OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();

  constructor(private el : ElementRef) {
    console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    //append the html element directly to the body
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
      this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}