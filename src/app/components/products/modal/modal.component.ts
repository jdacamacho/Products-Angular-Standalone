import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { Product } from '../../../business/Objects/Product';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule, NzButtonModule, NzIconModule, NzDescriptionsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() product!: Product;
  isVisible = false;

  constructor() {}

  showModal(data: Product): void {
    this.product = { ...data };
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

