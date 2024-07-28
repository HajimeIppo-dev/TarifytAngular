// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes), 
        provideHttpClient(),
        importProvidersFrom(ReactiveFormsModule, DropdownModule),
        provideAnimations(),
        ToastrModule
    ]
}).catch(err => console.error(err));
