import {Component, Input, OnInit} from '@angular/core';
import {Advertisement} from "../../../core/interfaces/advertisement";
import {AuthService} from "../../../modules/auth/services/auth.service";

@Component({
  selector: 'app-advertisement-view',
  templateUrl: './advertisement-view.component.html',
  styleUrls: ['./advertisement-view.component.scss']
})

export class AdvertisementViewComponent implements OnInit {

  @Input() advertisement: Advertisement;

  constructor(
    readonly authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
