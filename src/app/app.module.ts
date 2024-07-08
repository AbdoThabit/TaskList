import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './Components/list-tasks/list-tasks.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './Components/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HeaderComponent,
    FooterComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    UpdateTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
