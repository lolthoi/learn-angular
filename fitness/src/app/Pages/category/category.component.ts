import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  category = new Category();
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onUpdate(e: any) {
    this.category = {
      id: e.key,
      name: e.data.name,
      workout: null,
    };
    this.categoryService.update(this.category).subscribe(() => {
      this.categories;
    });
  }

  onCreate(e: any) {
    this.category = {
      id: this.category.id,
      name: e.data.name,
      workout: null,
    };
    this.categoryService.create(this.category).subscribe(() => {
      this.categories;
    });
  }

  onDelete(e: any) {
    this.categoryService.delete(e.key).subscribe(() => {
      this.categories;
    });
  }
}
