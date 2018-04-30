import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable()
export class TestManService {
  types: SelectItem[];
  defaults: SelectItem[];
  apiMethods: SelectItem[];
  constructor() {
    this.types = [
      { label: 'String', value: 'String' },
      { label: 'Number', value: 'Number' },
      { label: 'Boolean', value: 'Boolean' },
      { label: 'Undefined', value: 'Undefined' },
      { label: 'Null', value: 'Null' },
      { label: 'Array', value: 'Array' },
      { label: 'Object', value: 'Object' },
    ];

    this.defaults = [
      { label: '是', value: '是' },
      { label: '否', value: '否' }
    ];

    this.apiMethods = [
      { label: 'GET', value: 'GET' },
      { label: 'POST', value: 'POST' },
      { label: 'PUT', value: 'PUT' },
      { label: 'DELETE', value: 'DELETE' }
    ];
  }

  isJSON(str) {
    if (typeof str === 'string') {
        try {
            const obj = JSON.parse(str);
            if (typeof obj === 'object' && obj) {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
    console.log('It is not a string!');
}
}
