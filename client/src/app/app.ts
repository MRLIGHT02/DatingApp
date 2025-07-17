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
  users: any;
  /**
   * Angular lifecycle hook that is called after data-bound properties are initialized.
   */
  ngOnInit(): void {
    this.http.get('http://localhost:5207/api/users').subscribe({
      next: response => this.users = response,
      error: err => console.error('Error fetching users:', err),
      complete: () => console.log('User data fetch complete')
    })
  }
}
