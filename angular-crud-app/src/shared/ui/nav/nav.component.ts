import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-nav',
    template: `
    <header class="mb-5">
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" routerLink="">Angular CRUD</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" routerLink="/departments">Departments</a>
              </li>
              <li class="nav-item"><a class="nav-link" routerLink="/employees">Employees</a></li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`,
    imports: [RouterLink],
})
export class NavComponent {
    
}