import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceService } from '../devices/devices.service';
import { CategoriesService } from '../categories/categories.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private deviceService: DeviceService,
    private categoriesService: CategoriesService
  ) {}

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  postDevices() {
    const devices = this.deviceService.sendDevices();
    console.log('no post: ', devices);

    return this.http.post('http://localhost:3000/devices', devices);
  }

  postNewCategory() {
    const category = this.categoriesService.sendCategory();
    return this.http.post('http://localhost:3000/categories', category);
  }
}
