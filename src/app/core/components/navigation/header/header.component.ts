import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from "../../../modules/auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideMenuStatus: string = '';

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  changeSideMenuStatus() {
    if (!this.sideMenuStatus) this.sideMenuStatus = 'active'
    else this.sideMenuStatus = ''
  }
}
