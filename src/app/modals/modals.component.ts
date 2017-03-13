import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';

import { CustomModal } from './custom/custom.component';

@Component({
  selector: 'my-modals',
  templateUrl: './modals.template.html',
  styleUrls: ['./modals.component.scss'],
  providers: [Modal]
})
export class ModalsComponent implements OnInit {
  constructor(private storage: DataStorage, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.storage.startGame();
  }

  surrender() {
    var self = this;
    require.ensure(["../shared/templates/surrender.html"], () => {
      var template = require("../shared/templates/surrender.html");
      self.modal.alert()
        .size('lg')
        .showClose(true)
        .title('surrender')
        .body(template)
        .open();
    });
  }

  openHelp() {
    var self = this;
    require.ensure(["../shared/templates/help.html"], () => {
      var template = require("../shared/templates/help.html");
      self.modal.alert()
        .size('lg')
        .showClose(true)
        .title('surrender')
        .body(template)
        .open();
    });
  }

  openCustom() {
     return this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
}
