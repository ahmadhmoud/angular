import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  panelOpenState: boolean = false;
  @Input() sidenav: any;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
