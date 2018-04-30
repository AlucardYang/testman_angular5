import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../services/testman.service';

@Component({
  selector: 'json-list',
  templateUrl: './jsonlist.component.html',
  styleUrls: ['./jsonlist.component.scss']
})
export class JsonListComponent implements OnInit {
  json: any;
  jsons: Array<any> = [];
  types: SelectItem[];
  defaults: SelectItem[];
  id: any = 1;     // 当前id
  pid: any = 0;    // 父id
  layer: any = 0;  // 层级
  @Input() jsonStr: any;
  constructor(private testManService: TestManService) {

  }

  ngOnInit() {
    this.types = this.testManService.types;
    this.defaults = this.testManService.defaults;

    // this.jsonStr = '{"name":"testcase","testcase":[{"num":1,"testCaseName":"老用户登陆友邻市集","apiName":"登陆友邻市集","state":"无效","creator":"郑婷婷","updator":"曾晨","updateTime":""},{"num":2.0,"testCaseName":"团购商品详情页获取","apiName":"商家列表接口","state":"有效","creator":"李四","updator":"曾晨","updateTime":""},{"num":3,"testCaseName":"普通商品详情页获取","apiName":"友邻商品详情接口","state":"无效","creator":"张三","updator":"曾晨","updateTime":""}],"place":{"1":"深圳","2":"广州"}}';
    this.getParam();
  }

  // 获取json格式数据key/value值
  getJsonData(json: any, id: any, pid: any, layer: any) {
    if (Array.isArray(json)) {
      for (const object of json) {
        this.getObjParam(object, id, pid, layer);
      }
    } else {
      this.getObjParam(json, id, pid, layer);
    }
  }

  // 获取对象格式数据key/value值
  getObjParam(object, id, pid, layer) {
    let nodeId = 1;
    for (const key of Object.keys(object)) {
      const obj: any = {};
      obj['name'] = key;
      obj['isParent'] = false;
      obj['type'] = this.getValueType(object[key]);
      obj['layer'] = layer;
      obj['show'] = true;
      const str: string = JSON.stringify(object[key]);
      if (str.slice(0, 1) === '{' && str.slice(str.length - 1, str.length) === '}') {
        obj['value'] = '';
        obj['isParent'] = true;
        obj['open'] = true;
        obj['id'] = pid === 0 ? nodeId : (id + '' + nodeId);
        obj['pid'] = id;
        nodeId += 1;
        this.jsons.push(obj);
        this.getJsonData(object[key], obj['id'], obj['pid'], layer + 1);
      } else if (Array.isArray(object[key])) {
        const arrayStr: string = JSON.stringify(object[key]);
        if (object[key].length > 0) {
          const objectStr: string = JSON.stringify(object[key][0]);
          if (objectStr.slice(0, 1) === '{' && objectStr.slice(objectStr.length - 1, objectStr.length) === '}') {
            obj['value'] = '';
            obj['isParent'] = true;
            obj['open'] = true;
            obj['id'] = pid === 0 ? nodeId : (id + '' + nodeId);
            obj['pid'] = id;
            nodeId += 1;
            this.jsons.push(obj);
            this.getJsonData(object[key], obj['id'], obj['pid'], layer + 1);
          } else {
            obj['value'] = arrayStr;
            obj['id'] = pid === 0 ? nodeId : (id + '' + nodeId);
            obj['pid'] = id;
            nodeId += 1;
            this.jsons.push(obj);
          }
        } else {
          obj['value'] = arrayStr;
          obj['id'] = pid === 0 ? nodeId : (id + '' + nodeId);
          obj['pid'] = id;
          nodeId += 1;
          this.jsons.push(obj);
        }
      } else {
        obj['value'] = ((object[key] === null) ?
          'null' : ((object[key] === undefined) ? 'undefined' : object[key]));
        obj['id'] = pid === 0 ? nodeId : (id + '' + nodeId);
        obj['pid'] = id;
        nodeId += 1;
        this.jsons.push(obj);
      }
    }
  }

  // 获取参数值类型
  getValueType(value: any): string {
    let type = '';
    if (value === null) {
      type = 'Null';
    } else if (value === undefined) {
      type = 'Undefined';
    } else if (typeof (value) === 'string') {
      type = 'String';
    } else if (typeof (value) === 'number') {
      type = parseInt(String(value), 10) === value ? 'Int' : 'Float';
    } else if (typeof (value) === 'boolean') {
      type = 'Boolean';
    } else if (Array.isArray(value)) {
      type = 'Array';
    } else {
      type = 'Object';
    }
    return type;
  }

  // 获取参数值
  getParam() {
    this.id = 1;
    this.pid = 0;
    this.layer = 1;
    this.jsons = [];
    let json = this.jsonStr && this.jsonStr.replace(/\n/g, '');
    // console.log(json);
    if (this.testManService.isJSON(json)) {
      json = JSON.parse(json);
      this.getJsonData(json, this.id, this.pid, this.layer);
      this.jsons.forEach(element => {
        element['default'] = '是';
      });
      // console.log(this.jsons);
    } else {
      alert('不是json格式');
    }
  }

  // 展开和收起树结构
  openOrClose(tree) {
    tree['open'] = !tree['open'];
    for (const json of this.jsons) {
      if (json['pid'] === tree['id']) {
        json['show'] = !json['show'];
      }
      const treeId = String(tree['id']);
      const jsonId = String(json['id']);
      if (jsonId.slice(0, treeId.length) === treeId && (jsonId !== treeId)) {
        json['show'] = tree['open'];
      }
    }
  }

}
