import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})

export class SimpleformComponent implements OnInit {
  peru = 'LalithPrasad';
  count = 0;
  email = '';
  password = '';
  authenticated = false;
  showerror = false;
  retard = false;
  increment() {
    this.count++;
  }
  peruspy() {
    const p = this.peru;
    this.peru = p.slice(2, 8);
  }
  subclick() {
    console.log('Clicking Happened !');
    if (this.email === 'as' && this.password === 'sa') {
      this.authenticated = true;
      this.showerror = false;
      this.retard = false;
    } else if (this.email === '' && this.password === '') {
      this.retard = true;
    } else {
      this.password = '';
      this.authenticated = false;
      this.showerror = true;
      this.retard = false;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }
}
class ChildComponent {
}
