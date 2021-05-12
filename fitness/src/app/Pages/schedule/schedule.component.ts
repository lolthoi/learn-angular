import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/Models/Day';
import { Exercise } from 'src/app/Models/Exercise';
import { Schedule } from 'src/app/Models/Schedule';
import { Status } from 'src/app/Models/Status';
import { Workout } from 'src/app/Models/Workout';
import { DayService } from 'src/app/Services/day.service';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { ScheduleService } from 'src/app/Services/schedule.service';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  schedules: Schedule[];
  schedule = new Schedule();
  workouts: Workout[];
  exercises: Exercise[];
  days: Day[];
  status: Status[];
  repeatPattern: any = /^\b(0[1-9]|[1-9]|1[0-9]|20)\b$/;
  setPattern: any = /^\b(0[1-9]|[1-9]|10)\b$/;

  constructor(
    private scheduleService: ScheduleService,
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService,
    private dayService: DayService
  ) {}

  ngOnInit(): void {
    this.scheduleService.getAll().subscribe((res: any) => {
      this.schedules = res;
    });
    this.status = this.scheduleService.getStatuts();
    this.workoutService.getAll().subscribe((res: any) => {
      this.workouts = res;
    });
    this.exerciseService.getAll().subscribe((res: any) => {
      this.exercises = res;
    });
    this.dayService.getAll().subscribe((res: any) => {
      this.days = res;
    });
    console.log(this.schedules);
  }

  onUpdate(e: any) {
    this.schedule = {
      id: e.key,
      wid: e.data.wid,
      did: e.data.did,
      exid: e.data.exid,
      status: e.data.status,
      reps: e.data.reps,
      sets: e.data.sets,
    };
    this.scheduleService.update(this.schedule).subscribe(() => {
      this.schedules;
    });
  }

  onCreate(e: any) {
    this.schedule = {
      id: this.schedule.id,
      wid: e.data.wid,
      did: e.data.did,
      exid: e.data.exid,
      status: e.data.status,
      reps: e.data.reps,
      sets: e.data.sets,
    };
    this.scheduleService.create(this.schedule).subscribe(() => {
      this.schedules;
    });
  }

  onDelete(e: any) {
    this.scheduleService.delete(e.key).subscribe(() => {
      this.schedules;
    });
  }
}
