import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { Category } from '../shared/category.model';
import { Device } from '../shared/device.model';
import { DeviceService } from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devices: Device;
  selectedItem = '';
  categories: Category;

  constructor(private dataStorageService: DataStorageService, private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.dataStorageService.getCategories().subscribe((category) => {
      this.categories = category;
    });
  }

  onsubmit(form: NgForm) {
    const category = this.selectedItem['name'];
    const color = form.value.color;
    const serial = Number(form.value.serial);
    const categoryId = Number(this.selectedItem['id']);
    const payload = {
      category: category,
      color: color,
      partNumber: serial,
      categoryId: categoryId,
    };
    this.devices = payload;

    this.deviceService.getDevices(payload);

    this.dataStorageService.postDevices().subscribe((devices) => {
      console.log('sending', devices);
    });
    form.reset();
  }
}
