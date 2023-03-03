import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allUsers: User[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.gotoPage();
  }

  async gotoPage(pNum: number = 1): Promise<void> {
    try {
      let response = await this.usersService.getAll(pNum)
      this.currentPage = response.page
      this.allUsers = response.results
      this.totalPages = response.total_pages
    }
    catch (error) {
      console.log(error);
    }
  }

}

