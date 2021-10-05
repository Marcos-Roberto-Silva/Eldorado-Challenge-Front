import { Injectable } from '@angular/core';
import { Device } from '../shared/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devices = {};

  getDevices(data: Device) {
    console.log('na função: ', this.devices);
    
    this.devices = data;
  }

  sendDevices() {
    return this.devices;
  }
}
