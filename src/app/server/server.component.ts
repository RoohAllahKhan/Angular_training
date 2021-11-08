import {Component} from "@angular/core";

//JS object in this component to configure it otherwise it's not valuable to Angular
//Stores some information which will be stored as metadata for this class which will tell Angular what to do with this class
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Redhat';

  getServerStatus()
  {
    return this.serverStatus;
  }
}
