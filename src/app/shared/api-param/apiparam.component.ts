import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../services/testman.service';

@Component({
  selector: 'api-param',
  templateUrl: './apiparam.component.html',
  styleUrls: ['./apiparam.component.scss'],
  providers: [
    TestManService
  ]
})
export class ApiParamComponent implements OnInit {
  types: SelectItem[];
  defaults: SelectItem[];
  methods: SelectItem[];
  @Input() params: Array<any> = [];
  @Input() showBorder: Boolean = false;
  @Input() type: String = 'api';
  constructor(private testManService: TestManService) {

  }

  ngOnInit() {
    this.types = this.testManService.types;
    this.defaults = this.testManService.defaults;
    this.methods = this.testManService.methods;
  }

  // 增删参数
  operateUrlParam(type, index) {
    if (type === 'add') {
      const obj = {
        name: '',
        value: '',
        type: 'string',
        default: '否'
      };
      this.params.splice(index + 1, 0, obj);
    } else {
      this.params.splice(index, 1);
    }
  }

}
