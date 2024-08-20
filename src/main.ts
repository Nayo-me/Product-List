import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/componentfolder/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppRoutesModule } from './app/app-routes/app-routes.module';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure HttpClientModule is provided
    importProvidersFrom(AppRoutesModule)
  ]
})
  .catch(err => console.error(err));