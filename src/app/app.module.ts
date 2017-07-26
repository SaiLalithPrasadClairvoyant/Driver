import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { HttpModule } from '@angular/http';
import { HandlerComponent } from './handler/handler.component';
import { ModalModule } from 'ngx-bootstrap';
import { DisqusModule } from 'ngx-disqus';
import { PopoverModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'handler', component: HandlerComponent },
  { path: 'simpleForm', component: SimpleformComponent },
  { path: 'student', component: StudentComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SimpleformComponent,
    HandlerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    DisqusModule.forRoot('werta'),
    PopoverModule.forRoot(),
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
