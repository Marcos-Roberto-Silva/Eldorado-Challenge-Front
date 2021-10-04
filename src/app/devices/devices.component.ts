import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices = [];
  selectedItem = '';
  categories = [];

  categoryDefault = [
    { name: 'celular' },
    { name: 'tv' },
    { name: 'noteBook' },
]

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
   
    this.categoriesService.getCategories().subscribe((category) => {
      this.categories = Object.values(category);
    });    
  }

  getValue(event: any): void {
    this.selectedItem = event.target.value;    
  }

  onsubmit(form: NgForm) {
    const category = this.selectedItem;
    const color = form.value.color
    const serial = form.value.serial
    const payload = { category: category, serial: serial, color: color };
    this.devices = [...this.devices, { payload }];
    
    form.reset();
  }
}
