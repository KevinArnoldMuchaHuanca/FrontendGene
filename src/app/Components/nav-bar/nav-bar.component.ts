import { Component , OnInit} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterModule} from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarRow,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{


  ngOnInit(): void {
  }
}
