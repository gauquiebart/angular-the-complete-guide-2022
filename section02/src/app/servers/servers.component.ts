import {Component, OnInit} from '@angular/core';

@Component({
  //selector: 'app-servers', //element selector => typically this one is used for components
  //selector: '[app-servers]', //attribute  selector
  selector: '.app-servers', //class  selector
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = ``;
  userName = ``;
  serverCreated = false;
  servers = ['Testserver', `Testserver 2`];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
    this.serverName = 'Test server';
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created, name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onClearUserName() {
    this.userName = ``;
  }
}
