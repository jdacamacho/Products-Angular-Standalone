import { Component } from '@angular/core';
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

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SideBarComponent,
            NzLayoutModule,NzBreadCrumbModule,NzTabsModule,
            NzIconModule,NzCardModule,NzGridModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  tabs = [
    { name: 'Developer', content: 'Contenido del tab Developer' },
    { name: 'About me', content: 'Contenido del tab About me' },
    { name: 'Technologies', content: 'Contenido del tab Technologies' }
  ];
}
