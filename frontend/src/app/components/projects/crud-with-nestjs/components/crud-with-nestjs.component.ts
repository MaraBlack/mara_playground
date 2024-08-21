import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-with-nestjs',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './crud-with-nestjs.component.html',
  styleUrl: './crud-with-nestjs.component.scss'
})
export class CrudWithNestjsComponent implements OnInit {

  allItems!: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllItems().subscribe(data => {
      this.allItems = data;
      console.log('data', data);
    });
    
  }
}
