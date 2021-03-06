import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
   }

  ngOnInit() {
  }
  onCreateServer () {
    this.serverCreationStatus = 'Server was created!';
  }
}
