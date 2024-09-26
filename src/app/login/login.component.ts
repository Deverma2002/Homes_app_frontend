import { Component } from '@angular/core';
import { Router , RouterModule , RouterLink, RouterOutlet} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule ,RouterModule ,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // private apiUrl = 'http://192.168.1.14:4000/login'; // API endpoint
  private apiUrl = 'http://localhost:4000/login'; // API endpoint
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(form: any) {
    this.http.post(this.apiUrl, form.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Store token in local storage
        console.log('Login successful', response);
        this.router.navigate(['/home']); // Redirect to a protected route
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
