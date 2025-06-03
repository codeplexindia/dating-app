import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dating-app';
  http = inject(HttpClient);
  users: any;
  ngOnInit(): void {
    this.http.get('https://localhost:7036/api/user').subscribe({
      next: response => {
        this.users = response;
      },
      error: error => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}
