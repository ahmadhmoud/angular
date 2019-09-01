import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

import { ItemSaveSucessfullyComponent } from 'src/app/messages/item-save-sucessfully/item-save-sucessfully.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {
  public userForm: FormGroup;
  user: any = {};
  isCreating: boolean = false;

  constructor(private snackBar: MatSnackBar, private apiService: ApiService,
    public dialogRef: MatDialogRef<UserCreationComponent>) {

    this.userForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      Age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      Address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  ngOnInit() {
  }

  public createUser = (user) => {
    if (this.userForm.valid) {
      this.isCreating = true;
      this.apiService.createResource('users', user)
        .subscribe((response) => {
          this.snackBar.openFromComponent(ItemSaveSucessfullyComponent, { duration: 2000 });
          this.dialogRef.close();
        }, (error) => {
          console.error(error);
        }, () => {
          this.isCreating = false;
        });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }
}
