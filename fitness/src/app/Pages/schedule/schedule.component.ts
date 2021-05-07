import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/Models/Day';
import { Exercise } from 'src/app/Models/Exercise';
import { Schedule } from 'src/app/Models/Schedule';
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
    this.workoutService.getAll().subscribe((res: any) => {
      this.workouts = res;
    });
    this.exerciseService.getAll().subscribe((res: any) => {
      this.exercises = res;
    });
    this.dayService.getAll().subscribe((res: any) => {
      this.days = res;
    });
  }
  onUpdate(e: any) {
    this.schedule = {
      id: e.key,
      wId: e.data.wid,
      exId: e.data.exId,
      dId: e.data.did,
      status: e.data.status,
      repeats: e.data.repeats,
      sets: e.data.sets,
    };
    this.scheduleService.update(this.schedule).subscribe(() => {
      this.schedules;
    });
  }

  onCreate(e: any) {
    this.schedule = {
      id: this.schedule.id,
      wId: e.data.wId,
      exId: e.data.exId,
      dId: e.data.dId,
      status: e.data.status,
      repeats: e.data.repeats,
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
