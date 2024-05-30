import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzIconService } from 'ng-zorro-antd/icon';
import { HomeOutline, ShopOutline, UserOutline, EyeOutline,PlusOutline} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, NzSiderComponent, NzMenuModule, NzIconModule,FormsModule ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  
  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(HomeOutline);
    this.iconService.addIcon(ShopOutline);
    this.iconService.addIcon(UserOutline);
    this.iconService.addIcon(EyeOutline);
    this.iconService.addIcon(PlusOutline)
  }
}
