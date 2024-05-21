import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NzHeaderComponent,NzLayoutModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
