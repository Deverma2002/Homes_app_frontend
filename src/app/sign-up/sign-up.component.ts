import { Component } from '@angular/core';
import { Router ,RouterModule, RouterOutlet} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule,RouterOutlet , RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  private apiUrl = 'http://localhost:4000/signup'; // API endpoint

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(form: any) {
    if (form.value.password === form.value['confirm-password']) {
      this.http.post(this.apiUrl, form.value).subscribe(
        response => {
          console.log('Sign up successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Sign up error', error);
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }
}
