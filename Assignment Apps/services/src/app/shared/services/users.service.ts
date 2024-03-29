// Angular
import { Injectable } from '@angular/core';

// Services
import { CounterService } from './counter.service';

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.addInactiveToActive();
  }
}
