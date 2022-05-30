import { Injectable } from '@angular/core';
import { Registro } from './components/proyectos/chohan/registro';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  registros: Registro[];
  constructor() {}

  addItem(key: string, item: any) {
    let array: any = this.get(key);
    array.push(item);
    try {
      localStorage.setItem(key, JSON.stringify(array));
    } catch (e) {
      console.error('Error saving', e);
    }
  }
  changeTheme(key: string, color: string) {
    try {
      localStorage.setItem(key, JSON.stringify(color));
    } catch (error) {
      console.log(error);
    }
  }
  readTheme(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (e) {
      console.error('Error getting data', e);
      return null;
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      console.error('Error getting data', e);
      return null;
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing key', e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error cleaning localstorage', e);
    }
  }
}
