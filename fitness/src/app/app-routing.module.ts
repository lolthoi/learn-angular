import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Pages/category/category.component';
import { ExerciseComponent } from './Pages/exercise/exercise.component';
import { HomeComponent } from './Pages/home/home.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { WorkoutComponent } from './Pages/workout/workout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'workout',
    component: WorkoutComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'exercise',
    component: ExerciseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
