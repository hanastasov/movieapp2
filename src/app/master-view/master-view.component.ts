import { Component } from '@angular/core';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public date = new Date('0002-10-10T00:00');
}
