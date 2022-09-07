import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css'],
})
export class HomeviewComponent implements OnInit {
  columnDefs = [
    { field: 'Track' },
    { field: 'No. of Requested Resource' },
    { field: 'Filled Position' },
    { field: 'Open Position' },
  ];
  rowData = [
    {
      Track: '.Net',
      NoofRequestedResource: 11,
      FilledPosition: 4,
      OpenPosition: 7,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
