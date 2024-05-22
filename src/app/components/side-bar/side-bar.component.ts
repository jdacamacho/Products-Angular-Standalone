import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, NzSiderComponent, NzMenuModule, NzIconModule, NzToolTipModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
