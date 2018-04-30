import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable()
export class ApiManageService {
    member: SelectItem[];
    constructor() {
        this.member = [
            { label: '全部', value: '全部' },
            { label: '郑婷婷', value: '郑婷婷' },
            { label: '黎律', value: '黎律' },
            { label: '胡媛洁', value: '胡媛洁' },
            { label: '许春洋', value: '许春洋' }
        ];
    }
}
