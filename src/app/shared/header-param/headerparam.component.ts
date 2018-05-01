import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../services/testman.service';

@Component({
  selector: 'header-param',
  templateUrl: './headerparam.component.html',
  styleUrls: ['./headerparam.component.scss'],
  providers: [
    TestManService
  ]
})
export class HeaderParamComponent implements OnInit, OnChanges {
  methods: SelectItem[];
  params: Array<any> = [];
  json: any;
  @Input() jsonStr: any;
  constructor(private testManService: TestManService) {

  }

  ngOnInit() {
    this.methods = this.testManService.methods;
    this.getParams();
  }

  ngOnChanges(changes) {
    this.getParams();
  }

  // 获取json参数
  getParams() {
    this.params = [];
    if (this.jsonStr) {
      if (this.testManService.isJSON(this.jsonStr)) {
        this.json = JSON.parse(this.jsonStr);
        for (const key of Object.keys(this.json)) {
          const obj = {};
          obj['name'] = key;
          obj['method'] = '入参赋值';
          obj['param'] = this.json[key];
          this.params.push(obj);
        }
      } else {
        alert('不是json格式');
      }
    }
  }

  // 增删参数
  operateUrlParam(type, index) {
    if (type === 'add') {
      const obj = {
        name: '',
        method: '入参赋值',
        param: ''
      };
      this.params.splice(index + 1, 0, obj);
    } else {
      this.params.splice(index, 1);
    }
  }

}
