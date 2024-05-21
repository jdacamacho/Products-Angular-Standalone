import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SideBarComponent,NzLayoutModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
marksHGutter: any;

}
