import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chohan',
  templateUrl: './chohan.component.html',
  styleUrls: ['./chohan.component.css'],
})
export class ChohanComponent implements OnInit {
  initForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apuesta: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor() {}

  ngOnInit(): void {}
}
