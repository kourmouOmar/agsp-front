import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HostService {
  agsp: string;
  constructor() {
    this.agsp = environment.agsp;
  }

  getAuthHost() {
    return this.agsp;
  }


}
