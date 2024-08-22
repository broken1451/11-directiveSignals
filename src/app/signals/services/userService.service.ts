import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { UserResponse } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private http = inject(HttpClient);

    constructor() { }


    getUserById(id: number): Observable<UserResponse> {
        return this.http.get<UserResponse>(`${environment.url}/${id}`).pipe(
            take(1)
        );
    }

}