import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './Components/list-tasks/list-tasks.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { UpdateTaskComponent } from './Components/update-task/update-task.component';

const routes: Routes = [
  { path: '', component: ListTasksComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'taskDetails/:id', component: TaskDetailsComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'updateTask/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
