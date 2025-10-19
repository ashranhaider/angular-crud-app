import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { ShellComponent } from './layout/shell/shell.component';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(ShellComponent, config, context);

export default bootstrap;
