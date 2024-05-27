import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Product } from '../../business/Objects/Product';
import { ProductServiceService } from '../../business/Services/product-service.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SideBarComponent,
            NzLayoutModule,NzBreadCrumbModule,NzTabsModule,
            NzIconModule,NzCardModule,NzGridModule,CommonModule,
            FormsModule,NzTableModule,NzPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  index1 = 0;
  products: Product[] = [];
  currentPage = 1;
  pageSize = 5;
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
