import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { CommonModule } from '@angular/common';
import { UnknownError } from '../../../../common/http-errors/unknown.error';
import { BadRequestError } from '../../../../common/http-errors/bad-request.error';
import { UnauthorizedError } from '../../../../common/http-errors/unauthorised.error';
import { NotFoundError } from '../../../../common/http-errors/not-found.error';
import { InternalServerError } from '../../../../common/http-errors/internal-server.error';

@Component({
  selector: 'app-crud-with-nestjs',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './crud-with-nestjs.component.html',
  styleUrl: './crud-with-nestjs.component.scss',
})
export class CrudWithNestjsComponent implements OnInit {
  allItems!: string[];

  get_errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllItems().subscribe({
      next: (data) => {
        this.allItems = data;
        this.get_errorMessage = null;
        console.log('Data:', data);
      },
      error: (error) => {
        if (error instanceof NotFoundError ||
            error instanceof UnauthorizedError ||
            error instanceof BadRequestError ||
            error instanceof InternalServerError ||
            error instanceof UnknownError) {
              this.get_errorMessage = error.description;
            } else {
              this.get_errorMessage = 'An unexpected error occurred.';
            }
      }
    });
  }
}
