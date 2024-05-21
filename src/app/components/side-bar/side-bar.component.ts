import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzSiderComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, NzSiderComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
