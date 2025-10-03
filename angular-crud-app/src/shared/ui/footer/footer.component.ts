import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
 <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
        <span class="text-body-secondary"
          >Angular CRUD App Developed b Ashran</span
        >
      </div>
    </footer>

  `,
  styles: [`
    
  `]
})
export class FooterComponent { year = new Date().getFullYear(); }