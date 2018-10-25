import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatTableModule, 
  MatInputModule, 
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NameFilter } from './pipes/filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
