import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './testcasemanage.component.html',
  styleUrls: ['./testcasemanage.component.scss']
})
export class TestCaseManageComponent implements OnInit {
  cteator: any = '郑婷婷';
  cteators: Array<any> = ['郑婷婷', '曾晨', '张三', '李四'];
  updator: any = '郑婷婷';
  updators: Array<any> = ['郑婷婷', '曾晨', '张三', '李四'];
  testType: any = '功能测试';
  testTypes: Array<any> = ['冒烟测试', '功能测试', '回归测试', '预发布测试'];
  state: any = '全部';
  states: Array<any> = ['全部', '有效', '无效'];
  testCases: Array<any> = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.testCases = [
      {
        num: 1,
        testCaseName: '老用户登陆友邻市集',
        apiName: '登陆友邻市集',
        state: '无效',
        creator: '郑婷婷',
        updator: '曾晨',
        updateTime: new Date()
      }, {
        num: 2,
        testCaseName: '团购商品详情页获取',
        apiName: '商家列表接口',
        state: '有效',
        creator: '李四',
        updator: '曾晨',
        updateTime: new Date()
      }, {
        num: 3,
        testCaseName: '普通商品详情页获取',
        apiName: '友邻商品详情接口',
        state: '无效',
        creator: '张三',
        updator: '曾晨',
        updateTime: new Date()
      }
    ];
  }

  changeCteator(mem) {
    this.cteator = mem;
  }

  changeUpdator(mem) {
    this.updator = mem;
  }

  changeTestType(type) {
    this.testType = type;
  }

  changeState(state) {
    this.state = state;
  }

  goAddcase() {
    this.router.navigate(['/testman', 'addcase']);
  }
}
