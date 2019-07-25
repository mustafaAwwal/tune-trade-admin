import { Component, OnInit } from '@angular/core';
import { GetTokenRequestsService } from 'src/app/shared/services/index';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  private viewToken: any;
  private tokens = [
  ];
  showToken = false;
  constructor(private getTokenService: GetTokenRequestsService) { }

  ngOnInit() {
    this.getTokens();
  }
  getTokens() {
    this.getTokenService.getAllTokens().subscribe( res => {
      this.tokens = res.body.data;
    });
  }
  showTokenTrigger(data) {
    this.viewToken = data;
    this.showToken = !this.showToken;
  }
  closeView(event) {
    this.showToken = false;
  }
}
