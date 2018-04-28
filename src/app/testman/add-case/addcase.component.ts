import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AddCaseService } from './addcase.service';

@Component({
  moduleId: module.id,
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddCaseComponent implements OnInit {
  json: any;
  jsonStr: any;
  jsons: Array<any> = [];
  types: SelectItem[];
  defaults: SelectItem[];
  id: any = 1;     // 当前id
  pid: any = 0;    // 父id
  layer: any = 0;  // 层级
  constructor(private addCaseService: AddCaseService) {

  }

  ngOnInit() {
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

    // this.jsonStr = '{"name":"testcase","testcase":[{"num":1,"testCaseName":"老用户登陆友邻市集","apiName":"登陆友邻市集","state":"无效","creator":"郑婷婷","updator":"曾晨","updateTime":""},{"num":2.0,"testCaseName":"团购商品详情页获取","apiName":"商家列表接口","state":"有效","creator":"李四","updator":"曾晨","updateTime":""},{"num":3,"testCaseName":"普通商品详情页获取","apiName":"友邻商品详情接口","state":"无效","creator":"张三","updator":"曾晨","updateTime":""}],"place":{"1":"深圳","2":"广州"}}';
    this.jsonStr = '{"code":0,"result":{"goods_id":"176","head_imgs":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/m30puac9k1va68gy.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/3r1lrzbw0otb92vn.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/wz5081bkxko60s3.JPG"],"name":"吃的","title":"吃的吃的吃的吃的","min_price":100,"max_price":100,"end_time":1559376360000,"sunshine_community":true,"sunshine_price":1,"extend_product":false,"specs":[],"products":[{"product_id":"382","price":100,"stock":1000,"property":[],"limit_buy_num":null}],"shiping":0,"features":[],"introduce_goods":{"title":"商品介绍","content":"吃的吃的吃的吃的吃的吃的吃的吃的吃的吃的","img":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/3i75p5md7wtvdhs1.jpg"]},"introduce_special":{"title":null,"content":null,"img":null},"supplier":{"supplier_name":"固定分类的商家","supplier_icon":"http://odso6i1fb.bkt.clouddn.com/2018/01/08/0ei047yddljuj0tr.png","supplier_id":25},"activity":{"id":309,"name":"23424","type":"GROUPON","price":99,"stock":null,"limit_buy_num":1,"curr_time":1524620535678,"start_time":1517205480000,"end_time":1524981480000,"groupon_num":2,"groupon_paid_num":0,"paid_user_num":0,"source":"","introduction":"","activity_img_url":null,"activity_status":null,"unpaid":false,"over":true},"nationwide_sales":1,"snap_id":238,"supplier_id":25,"category_id":640,"free_shipping":null},"message":null}';

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
    let json = this.jsonStr && this.jsonStr.replace(/\n/ig, '');
    if (this.addCaseService.isJSON(json)) {
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
