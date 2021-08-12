import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUsuarioComponent } from '../create-usuario/create-usuario.component';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent {

  constructor(
    private matDialog: MatDialog
  ) {

  }

  addUser() {
    this.matDialog.open(CreateUsuarioComponent, {
      width: '480px'
    });
  }

}
