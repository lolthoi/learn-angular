import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/Models/Exercise';
import { ExerciseService } from 'src/app/Services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[];
  exercise = new Exercise();

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.getAll().subscribe((res: any) => {
      this.exercises = res;
    });
  }
  onUpdate(e: any) {
    this.exercise = {
      id: e.key,
      title: e.data.title,
      description: e.data.description,
      image: e.data.image,
      link: e.data.link,
      schedule: [],
    };
    this.exerciseService.update(this.exercise).subscribe(() => {
      this.exercises;
    });
  }

  onCreate(e: any) {
    this.exercise = {
      id: this.exercise.id,
      title: e.data.title,
      description: e.data.description,
      image: e.data.image,
      link: e.data.link,
      schedule: [],
    };
    this.exerciseService.create(this.exercise).subscribe(() => {
      this.exercises;
    });
  }

  onDelete(e: any) {
    this.exerciseService.delete(e.key).subscribe(() => {
      this.exercises;
    });
  }
}
