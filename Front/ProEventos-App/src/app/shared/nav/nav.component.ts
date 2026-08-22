import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav',
    imports: [
    CollapseModule,
    BsDropdownModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isCollapsed = true;

  constructor(private router: Router){}

  showMenu(): boolean {
    return this.router.url != '/user/login';
  }

}
