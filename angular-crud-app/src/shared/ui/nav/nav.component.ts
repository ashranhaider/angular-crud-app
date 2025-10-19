// ...existing code...
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
// ...existing imports...

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" routerLink="/">AngularCrudApp</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/departments" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Departments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/employees" routerLinkActive="active">Employees</a>
          </li>
          <!-- ...other links... -->
        </ul>
      </div>
    </div>
  </nav>
  `,
  styles: []
})
export class NavComponent {
  
}
