import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent],
  template: `
    <main class="main-container">
      <router-outlet></router-outlet> <!-- Adicione esta tag -->
      <app-task-list></app-task-list>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'todo-list';
}
