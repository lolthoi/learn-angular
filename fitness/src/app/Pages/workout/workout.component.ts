import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { Workout } from 'src/app/Models/Workout';
import { CategoryService } from 'src/app/Services/category.service';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[];
  workout = new Workout();
  categories: Category[];
  constructor(
    private workoutService: WorkoutService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.workoutService.getAll().subscribe((res: any) => {
      this.workouts = res;
    });
    this.categoryService.getAll().subscribe((res: any) => {
      this.categories = res;
    });
  }
  onUpdate(e: any) {
    this.workout = {
      id: e.key,
      title: e.data.title,
      description: e.data.description,
      image: e.data.image,
      duration: e.data.duration,
      price: e.data.price,
      categoryId: e.data.categoryId,
      orderItems: [],
      schedule: [],
    };
    this.workoutService.update(this.workout).subscribe(() => {
      this.workouts;
    });
  }

  onCreate(e: any) {
    this.workout = {
      id: this.workout.id,
      title: e.data.title,
      description: e.data.description,
      image: e.data.image,
      duration: e.data.duration,
      price: e.data.price,
      categoryId: e.data.categoryId,
      orderItems: [],
      schedule: [],
    };
    this.workoutService.create(this.workout).subscribe(() => {
      this.workouts;
    });
  }

  onDelete(e: any) {
    this.workoutService.delete(e.key).subscribe(() => {
      this.workouts;
    });
  }
}
