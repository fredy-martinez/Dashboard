import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '../interface/req-response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  })

  //Señales computadas para usar ese http privado en el typescript
  public users = computed( () => this.#state().users);
  public loading = computed( () => this.#state().loading);

  constructor() { 

    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500))
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data,
        })
      })
    
  }

}
