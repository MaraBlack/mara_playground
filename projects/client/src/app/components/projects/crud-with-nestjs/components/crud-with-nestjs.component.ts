import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
  OnInit,
} from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { CommonModule } from '@angular/common';
import { UnknownError } from '../../../../common/http-errors/unknown.error';
import { BadRequestError } from '../../../../common/http-errors/bad-request.error';
import { UnauthorizedError } from '../../../../common/http-errors/unauthorised.error';
import { NotFoundError } from '../../../../common/http-errors/not-found.error';
import { InternalServerError } from '../../../../common/http-errors/internal-server.error';
import { Todo } from '../shared/models/todo.model';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-crud-with-nestjs',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './crud-with-nestjs.component.html',
  styleUrl: './crud-with-nestjs.component.scss',
})
export class CrudWithNestjsComponent implements OnInit {
  allItems!: Todo[];

  get_errorMessage: string | null = null;

  constructor(
    private dataService: DataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems(): void {
    this.spinner.show();
    this.dataService.getAllItems().subscribe({
      next: (data) => {
        this.allItems = data;
        this.get_errorMessage = null;
      },
      error: (error) => {
        if (
          error instanceof NotFoundError ||
          error instanceof UnauthorizedError ||
          error instanceof BadRequestError ||
          error instanceof InternalServerError ||
          error instanceof UnknownError
        ) {
          this.get_errorMessage = error.description;
        } else {
          this.get_errorMessage =
            'An unexpected error occurred: ' + error.description;
        }
      },
      complete: () => {
        this.spinner.hide();
      },
    });
  }

  onRefreshClick() {
    this.dataService.getAllItemsCopy().subscribe({
      next: (data) => {
        this.allItems = data;
      },
    });
  }

  onCheckboxClick(id: number) {
    console.log(`Item with ID '${id}' has been marked as done.`);
  }

  onEditClick(id: number) {
    console.log(`Item with ID '${id}' has been modified.`);
  }

  onDeleteClick(id: number) {
    this.spinner.show();
    console.log(`Item with ID '${id}' has been deleted.`);
    this.dataService.deleteTodo(id).subscribe({
      next: () => {
        this.loadItems();
      },
      complete: () => {
        this.spinner.hide();
      },
    });
  }
}
