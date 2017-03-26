import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../shared';
import { filter } from 'lodash';

class Variant{
  selected: boolean = false;
  constructor(public text: string, public id: string, private parent: QuestionComponent) {
  }

  select() {
    this.parent.onSelect();
    this.selected = !this.selected;
  }
}

@Component({
  selector: 'question',
  templateUrl: './question.template.html',
  styleUrls: ['./question.style.scss']
})
export class QuestionComponent implements OnInit {
  @Input() data: any;

  type: string

  variants: Variant[]

  constructor(private api: ApiService) {
  }

  ngOnInit() {
      this.variants = this.getVariants(this.data.variants);
      this.type = this.data.type;
  }

  getVariants(variants: any) {
    return variants.map(v => new Variant(v.text, v.id, this));
  }

  onSelect() {
    if(this.type === 'radio') {
       for (let variant of this.variants) {
          variant.selected = false;
       }
    }
  }

  commit() {
    let answersIds = filter(this.variants, item => item.selected)
        .map(item => item.id)
        .join(',');
        
    this.api.check(this.data.id, answersIds);
  }
}
