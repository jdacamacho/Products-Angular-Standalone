import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NzPageHeaderModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
