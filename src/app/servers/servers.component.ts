import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'RoohServer';
  isCreated = false;
  allServers = ['linux', 'ubuntu'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer()
  {
    this.isCreated = true;
    this.allServers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServer(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  ngOnInit(): void {
  }

}
