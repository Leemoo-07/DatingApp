import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountservice: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    console.log('Payload:', this.model);  // 👈 add this
    this.accountservice.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: err => {
        console.error('Login failed:', err);
        this.toastr.error(err.error);  // show backend message
      }
    });
  }


  logout() {
    this.accountservice.logout();
    this.router.navigateByUrl('/');
  }

}
