import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NzCardModule, NzGridModule, NzLayoutModule,NzBreadCrumbModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
marksHGutter: any;

}
