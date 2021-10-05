import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private categoryService: CategoriesService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {}

  onsubmit(form: NgForm) {
    const name = form.value.name;

   const payload: {} = { name: name };

    this.categoryService.saveCategory(payload);

    this.dataStorage.postNewCategory().subscribe((category) => {
      console.log(category);
    });
    form.reset();
  }
}
