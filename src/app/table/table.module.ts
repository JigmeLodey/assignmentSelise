import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolModule} from '../mat-tool/mat-tool.module'
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './share/header/header.component';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TableComponent, HeaderComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatToolModule,
    FlexLayoutModule,
    MatSortModule,
    FormsModule,
  ]
})
export class TableModule { }
