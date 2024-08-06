import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/componentfolder/app.component';
import { provideHttpClient } from '@angular/common/http';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Ensure HttpClientModule is provided
  ]
})
  .catch(err => console.error(err));