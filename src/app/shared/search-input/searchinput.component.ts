import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../services/testman.service';

@Component({
  selector: 'search-input',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.scss'],
  providers: [
    TestManService
  ]
})
export class SearchInputComponent implements OnInit {
  @Input() width: any = '150px';
  @Input() searchText: any = '';
  @Output() search = new EventEmitter();
  constructor(private testManService: TestManService) {

  }

  ngOnInit() {

  }

  // 搜索
  onSearch() {
    this.search.emit(this.searchText);
  }

  // 清空
  onClear() {
    this.searchText = '';
    this.search.emit(this.searchText);
  }

}
