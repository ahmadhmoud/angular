import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './user/users/users.component';
import { UserDeletionComponent } from './user/modals/user-deletion/user-deletion.component';
import { UserCreationComponent } from './user/modals/user-creation/user-creation.component';
import { ItemSaveSucessfullyComponent } from './messages/item-save-sucessfully/item-save-sucessfully.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    UsersComponent,
    UserDeletionComponent,
    UserCreationComponent,
    ItemSaveSucessfullyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    UserDeletionComponent,
    UserCreationComponent,
    ItemSaveSucessfullyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  mode = "mode";
}
