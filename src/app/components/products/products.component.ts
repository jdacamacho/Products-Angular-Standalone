import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../business/Objects/Product';
import { ProductServiceService } from '../../business/Services/product-service.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ModalComponent } from './modal/modal.component';
import { NzInputModule } from 'ng-zorro-antd/input'

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [HeaderComponent, FooterComponent, NzTabsModule,
        NzIconModule, NzCardModule, CommonModule,
        FormsModule, NzPaginationModule, SideBarComponent,BreadCrumbComponent,
        ModalComponent,NzInputModule]
})
export class ProductsComponent implements OnInit {
  isVertical = false;
  index1 = 0;
  products: Product[] = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  currentItems: Product[] = [];

  constructor(private objProductService: ProductServiceService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.objProductService.getProducts().subscribe(
      products => {
        this.products = products;
        this.totalItems = this.products.length;
        this.currentPage = 1;
        this.currentItems = this.products.slice(0, this.pageSize);
      }
    );
  }

  onPageChange(pageIndex: number): void {
    const startIndex = (pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.currentItems = this.products.slice(startIndex, endIndex);
  }
}
