import {Component} from "@angular/core";

//JS object in this component to configure it otherwise it's not valuable to Angular
//Stores some information which will be stored as metadata for this class which will tell Angular what to do with this class
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus()
  {
    return this.serverStatus;
  }

  getBgColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
