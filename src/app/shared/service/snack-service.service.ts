import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SharedServiceService {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  /**
  * open Snack Bar Success
  *
  * @param message
  * @param action
  */
  openSnackBarSuccess(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: 'oppenSnackBarSuccessClass'
    });
  }

  /**
   * open Snack Bar Failure
   *
   * @param message
   * @param action
   */
  openSnackBarFailure(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: 'oppenSnackBarFailureClass'
    });
  }
}
