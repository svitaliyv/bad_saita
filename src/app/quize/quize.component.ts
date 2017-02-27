import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'my-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  constructor(private storage: DataStorage, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.storage.startGame();
  }

  surrender() {
    var self = this;
    var template = require("../shared/templates/surrender.html");
    self.modal.alert()
        .size('lg')
        .showClose(true)
        .title('surrender')
        .body(template)
        .open();
  }

  openHelp() {
    var template = require("../shared/templates/help.html");
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('openHelp')
        .body(template)
        .open();

  }
}
