import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoryComponent } from './Pages/category/category.component';
import { DxDataGridModule } from 'devextreme-angular';
import { WorkoutComponent } from './Pages/workout/workout.component';
import { ExerciseComponent } from './Pages/exercise/exercise.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    WorkoutComponent,
    ExerciseComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
