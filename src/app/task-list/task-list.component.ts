import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule], // Adicione aqui
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: { name: string, completed: boolean }[] = []; // Alteramos para armazenar objetos
  newTask: string = '';
  showError: boolean = false;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        name: this.newTask.trim(),
        completed: false
      });
      this.newTask = '';
      this.showError = false;
    } else {
      this.showError = true;
      setTimeout(() => this.showError = false, 2000); // Auto-esconde após 2s
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Novo método para marcar/desmarcar como concluído
  toggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}