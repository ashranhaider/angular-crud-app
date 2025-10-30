import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/ui/nav/nav.component';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { ToastContainer } from "../../shared/ui/toast/toast";

@Component({
  selector: 'app-layout',
  standalone: true, 
  imports: [RouterOutlet, NavComponent, FooterComponent, ToastContainer],
  template: `
  <app-nav></app-nav>     
    <main class="flex-grow-1 container">
      <router-outlet></router-outlet>
      <app-toast-container></app-toast-container>
      </main>
    <app-footer></app-footer>`,
  styles: ``
})
export class ShellComponent {
protected readonly title = signal('angular-crud-app');
}
