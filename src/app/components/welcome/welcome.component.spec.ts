import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../../services/user/user.service';

class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User' };
}

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let userService: UserService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            providers: [
                WelcomeComponent,
                { provide: UserService, useClass: MockUserService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        // fixture = TestBed.createComponent(WelcomeComponent);
        // component = fixture.componentInstance;
        component = TestBed.get(WelcomeComponent);
        userService = TestBed.get(UserService);
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    
});
