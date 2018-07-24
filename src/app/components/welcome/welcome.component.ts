import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    providers: [UserService]
})
export class WelcomeComponent implements OnInit {
    welcome: string;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.welcome = this.userService.isLoggedIn ? 'Welcome ' + this.userService.user : 'Please log in';
    }

}
