import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-java',
  templateUrl: './java.page.html',
  styleUrls: ['./java.page.scss'],
})
export class JavaPage implements OnInit {
  ports: Port[];
  port: Port;

  constructor() {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' },
      { id: 4, name: 'Tokai' },
      { id: 5, name: 'Vladivostok' },
      { id: 6, name: 'Navlakhi' },
      { id: 7, name: 'Tokai' },
      { id: 8, name: 'Vladivostok' },
      { id: 9, name: 'Navlakhi' },
      { id: 10, name: 'Tokai' },
      { id: 11, name: 'Vladivostok' },
      { id: 12, name: 'Navlakhi' },
      { id: 13, name: 'Tokai' },
      { id: 14, name: 'Vladivostok' },
      { id: 15, name: 'Navlakhi' }
    ];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


  ngOnInit() {
    console.log()
  }

}
