import { Component, OnInit } from '@angular/core';
import { Color } from 'ag-grid-community';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css'],
})
export class HomeviewComponent implements OnInit {
  columnDefs = [
    { field: 'Track', resizable: true },
    { field: 'NoofRequestedResource', resizable: true },
    { field: 'FilledPosition', resizable: true },
    { field: 'OpenPosition', resizable: true },
  ];

  rowData = [
    {
      Track: '.Net',
      NoofRequestedResource: 11,
      FilledPosition: 4,
      OpenPosition: 7,
    },
    {
      Track: 'BA &SQA',
      NoofRequestedResource: 24,
      FilledPosition: 10,
      OpenPosition: 14,
    },
  ];

  columnDefs1 = [
    { field: 'Track', resizable: true },
    { field: 'TotalInterviews', resizable: true },
    { field: 'Pass', resizable: true },
    { field: 'Failed', resizable: true },
    { field: 'Deferred', resizable: true },
    { field: 'PendingFeedback', resizable: true },
    { field: 'PendingHiringGrid', resizable: true },
    { field: 'Hired', resizable: true },
  ];

  rowData1 = [
    {
      Track: '.Net',
      TotalInterviews: 11,
      Pass: 4,
      Failed: 7,
      Deferred: 11,
      PendingFeedback: 3,
      PendingHiringGrid: 11,
      Hired: 7,
    },
    {
      Track: 'BA & SQA',
      TotalInterviews: 11,
      Pass: 4,
      Failed: 7,
      Deferred: 11,
      PendingFeedback: 3,
      PendingHiringGrid: 11,
      Hired: 7,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
