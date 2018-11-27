import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testseerv';
  userName = '';
  serverCreated = false;
  servers = ['testserver', 'testserver 2'];
  buttonPress = false;
  presslog = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onShowSecretPar() {
    this.buttonPress = true;
  }
  logPresses() {
    this.buttonPress = !this.buttonPress;
    // this.presslog.push(this.presslog.length + 1);
    this.presslog.push(new Date());
  }
}
