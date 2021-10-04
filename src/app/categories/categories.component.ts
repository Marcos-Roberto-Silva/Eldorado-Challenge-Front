import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category = [];
  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(form: NgForm) {   
    const name = form.value.name
    console.log(form.value.name);
    
    this.category = [...this.category, { name }];
    console.log(  this.category);
    
    form.reset();
  }
}
