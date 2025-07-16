import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('client');
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('/api/hello').subscribe({}), {
    }
  }
