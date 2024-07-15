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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './Components/update-task/update-task.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';
import { UserTasksComponent } from './Components/user-tasks/user-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HeaderComponent,
    FooterComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    RegisterationComponent,
    LoginComponent,
    UserTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
