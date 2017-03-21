import { Component, Input, OnInit } from '@angular/core';

class Variant{
  selected: boolean = false;
  constructor(public text: string, private parent: QuestionComponent) {
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

  selectedVariants: Variant[]

  variants: Variant[]

  constructor() {
  }

  ngOnInit() {
      this.variants = this.getVariants(this.data.variants);
      this.type = this.data.type;
  }

  getVariants(variants: any) {
    return variants.map(v => new Variant(v.text, this));
  }

  onSelect() {
    if(this.type === 'radio') {
       for (let variant of this.variants) {
          variant.selected = false;
       }
    }
  }
}
