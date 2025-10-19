import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import {ShellComponent} from './layout/shell/shell.component';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
bootstrapApplication(ShellComponent, appConfig)
  .catch((err) => console.error(err));
