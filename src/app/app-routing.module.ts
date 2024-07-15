import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './Components/list-tasks/list-tasks.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { UpdateTaskComponent } from './Components/update-task/update-task.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';
import { UserTasksComponent } from './Components/user-tasks/user-tasks.component';

const routes: Routes = [
  { path: '', component: UserTasksComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'userTasks', component: UserTasksComponent },
  { path: 'registration', component: RegisterationComponent },
  { path: 'taskDetails/:id', component: TaskDetailsComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'updateTask/:id', component: UpdateTaskComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
