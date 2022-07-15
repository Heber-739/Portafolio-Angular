import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  sendFirebase(path: string, mensaje: any): any {
    return this.http
      .put(
        `https://portafolioangular-42bcd-default-rtdb.firebaseio.com/${path}`,
        mensaje
      )
      .subscribe((Response) => null);
  }

  getFirebase(path: string): any {
    return this.http.get(
      `https://portafolioangular-42bcd-default-rtdb.firebaseio.com/${path}`
    );
  }
}
