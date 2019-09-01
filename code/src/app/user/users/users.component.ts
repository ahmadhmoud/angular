import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDeletionComponent } from '../modals/user-deletion/user-deletion.component';
import { UserCreationComponent } from '../modals/user-creation/user-creation.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loadingData: boolean = true;

  users: Observable<any[]>;

  displayedColumns: string[] = ['Name', 'Age', 'Address', 'Action'];

  constructor(private db: AngularFirestore, public dialog: MatDialog, private http: HttpClient,
    private apiService: ApiService) {
    this.users =  db.collection('users').snapshotChanges()
    .pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
      }));

    this.users
      .subscribe(result => {
        this.loadingData = false;
      });
  }

  ngOnInit() {
  }

  create(): void {
    const dialogRef = this.dialog.open(UserCreationComponent, {
      width: '350px',
      // data: { userId: } //name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.db.collection("users").doc(user.id).delete().then(function () {
        //   console.log("Document successfully deleted!");
        // }).catch(function (error) {
        //   console.error("Error removing document: ", error);
        // });
      }
    });
  }

  delete(user): void {
    const dialogRef = this.dialog.open(UserDeletionComponent, {
      width: '350px',
      // data: { userId: } //name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.collection("users").doc(user.id).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
      }
    });
  }
}