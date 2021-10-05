import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class CategoriesService {
  private categories: {} = {};

  getCategories() {       
    return this.categories;
  }

  saveCategory(category: {}) {
    this.categories = category;
  }

  sendCategory() {
    console.log('Categorias', this.categories);

    return this.categories;
  }
}