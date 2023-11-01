import { Component } from '@angular/core';
export interface PeriodicElement {
  invoiceId: string;
  date: string;
  customer: string;
  payable_amount: string;
  paid_amount: string;
  due: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
  {
    invoiceId: '#AHGA68',
    date: '23/09/2022',
    customer: 'Jacob Marcus',
    payable_amount: '$100',
    paid_amount: '$000',
    due: '$000',
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = [
    'invoiceId',
    'date',
    'customer',
    'payable_amount',
    'paid_amount',
    'due',
  ];
  dataSource = ELEMENT_DATA;
}
