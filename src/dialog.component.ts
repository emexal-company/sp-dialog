/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dialogStyles from './dialog.styles';
import { template, templateFullscreen } from './dialog.template';

import '@spectrum/sp-button';

@customElement('sp-dialog')
export class Dialog extends Base {
  public static componentStyles = [dialogStyles];

  @property({ type: String }) public _title: string = '';
  @property({ type: String }) public okLabel: string = 'OK';
  @property({ type: String }) public cancelLabel: string = 'Cancel';
  @property({ type: String }) public thirdBtnLabel: string = '';
  @property({ type: String }) public top: string = '';
  @property({ type: String }) public imageURL: string = '';
  @property({ type: String }) public footerContent: string = '';

  @property({ type: Boolean }) public noDivider: boolean = false;
  @property({ type: Boolean }) public fullscreen: boolean = false;
  @property({ type: Boolean }) public noButtons: boolean = true;
  @property({ type: Boolean }) public confirmation: boolean = false;
  @property({ type: Boolean }) public information: boolean = false;
  @property({ type: Boolean }) public scrolling: boolean = false;
  @property({ type: Boolean }) public destructive: boolean = false;
  @property({ type: Boolean }) public threeButtons: boolean = false;
  @property({ type: Boolean }) public error: boolean = false;
  @property({ type: Boolean }) public open: boolean = false;

  @property({ type: Boolean }) public dismissible: boolean = false;
  @property({ type: Boolean }) public hero: boolean = false;

  @property({ type: Boolean }) public small: boolean = false;
  @property({ type: Boolean }) public medium: boolean = false;
  @property({ type: Boolean }) public large: boolean = false;

  @property({ type: Boolean }) public alert: boolean = false;

  // trigger to open the dialog
  @property({ type: Boolean }) public trigger: boolean = false;
  @property({ type: String }) public triggerLabel: String = 'Show';

  public show() {
    this.open = true;
  }

  public hide() {
    this.open = false;
  }

  public display() {
    this.open = !this.open;
  }

  protected handleCancel() {
    this.notifyClick(false);
  }

  protected handleOK() {
    this.notifyClick(true);
  }

  protected handleThirdButton() {
    /*
        this.dispatchEvent(new CustomEvent('thirdbtnclicked', {
          detail: {
            ok,
          },
        }));
    */
  }

  protected notifyClick(ok: boolean) {
    if (ok) {
      this.dispatchEvent(new CustomEvent('clicked', {
        detail: {
          ok,
        },
      }));
    } else {
      this.open = ok;
    }

  }
  protected render() {
    if (!this.fullscreen) {
      return template.call(this);
    } else {
      return templateFullscreen.call(this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-dialog': Dialog;
  }
}
