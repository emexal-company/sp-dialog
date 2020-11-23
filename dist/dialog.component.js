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
import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dialogStyles from './dialog.styles';
import { template, templateFullscreen } from './dialog.template';
import '@spectrum/sp-button';
let Dialog = class Dialog extends Base {
    constructor() {
        super(...arguments);
        this._title = '';
        this.okLabel = 'OK';
        this.cancelLabel = 'Cancel';
        this.thirdBtnLabel = '';
        this.top = '';
        this.imageURL = '';
        this.footerContent = '';
        this.noDivider = false;
        this.fullscreen = false;
        this.noButtons = true;
        this.confirmation = false;
        this.information = false;
        this.scrolling = false;
        this.destructive = false;
        this.threeButtons = false;
        this.error = false;
        this.open = false;
        this.dismissible = false;
        this.hero = false;
        this.small = false;
        this.medium = false;
        this.large = false;
        this.alert = false;
        // trigger to open the dialog
        this.trigger = false;
        this.triggerLabel = 'Show';
    }
    show() {
        this.open = true;
    }
    hide() {
        this.open = false;
    }
    display() {
        this.open = !this.open;
    }
    handleCancel() {
        this.notifyClick(false);
    }
    handleOK() {
        this.notifyClick(true);
    }
    handleThirdButton() {
        /*
            this.dispatchEvent(new CustomEvent('thirdbtnclicked', {
              detail: {
                ok,
              },
            }));
        */
    }
    notifyClick(ok) {
        if (ok) {
            this.dispatchEvent(new CustomEvent('clicked', {
                detail: {
                    ok,
                },
            }));
        }
        else {
            this.open = ok;
        }
    }
    render() {
        if (!this.fullscreen) {
            return template.call(this);
        }
        else {
            return templateFullscreen.call(this);
        }
    }
};
Dialog.componentStyles = [dialogStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "_title", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "okLabel", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "cancelLabel", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "thirdBtnLabel", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "top", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "imageURL", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "footerContent", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "noDivider", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "fullscreen", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "noButtons", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "confirmation", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "information", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "scrolling", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "destructive", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "threeButtons", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "error", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "open", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "dismissible", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "hero", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "medium", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "large", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "alert", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dialog.prototype, "trigger", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dialog.prototype, "triggerLabel", void 0);
Dialog = __decorate([
    customElement('sp-dialog')
], Dialog);
export { Dialog };
//# sourceMappingURL=dialog.component.js.map