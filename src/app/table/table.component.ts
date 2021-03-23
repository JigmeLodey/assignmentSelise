import {Component, OnInit, ViewChild} from '@angular/core';
import {TableService} from './service/table.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {DeparmentComponent} from './share/data/deparment.component';
import {DzongkhagComponent} from './share/data/dzongkhag.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  listData: MatTableDataSource<any> | any;
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'number', 'dob', 'department', 'location', 'status'];
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) MatPaginator: MatPaginator | any;
  users: any;
  deparmentList = new DeparmentComponent().departments;
  dzongkhagsList = new DzongkhagComponent().dzongkhags;
  searchText: string | any;

  constructor(public service: TableService) {
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): any {
    this.service.getEmployee().subscribe((res: any) => {
      this.users = res;
      this.listData = new MatTableDataSource<any>(this.users);
      this.listData.sort = this.sort;
      this.listData.paginator = this.MatPaginator;

    });
  }

  clear(): void {
    this.searchText = ' ';
    this.searchFilter();
  }

  searchFilter(): void {
    this.listData.filter = this.searchText.trim().toLowerCase();

  }

  applyFilter(filterValue: string): void {
    console.log(filterValue);
    if (filterValue === 'none'){
    } else {
      this.listData.filter = filterValue.trim().toLowerCase();
    }
  }
}
