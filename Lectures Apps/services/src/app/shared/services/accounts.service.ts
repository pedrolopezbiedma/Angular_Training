import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
  }

  updateStatus(id:number, status: string): void {
    this.accounts[id].status = status;
  }
}
