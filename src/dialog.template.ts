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

import { html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { Dialog } from './dialog.component';

import '@spectrum/sp-button';
import '@spectrum/sp-icon';

export function template(this: Dialog) {


    const classes = {
        'is-open': this.open,
        'spectrum-Dialog--noDivider': this.noDivider,
        'spectrum-Dialog--error': this.error,
        'spectrum-Dialog--dismissible': this.dismissible,
        'spectrum-Dialog--small': this.small,
        'spectrum-Dialog--medium': this.medium,
        'spectrum-Dialog--large': this.large,
        'spectrum-Dialog--alert': this.alert,
    };

    // this is added only to manage the demo-dialog display 
    // because spectrum-dialog by defaut display: flex so all the examples 
    // are displayed on top of each other 
    var demoStyles = '';
    if (this.top) {
        demoStyles = `display: block !important; top: ${this.top}px !important; position: relative;`;
    }

    if (this.scrolling) {
        demoStyles = `display: block !important; top: 50% !important; position: absolute; left: 50%; width: 100%;`;
    }
    //////////////////////////////////

    //Trigger 
    const trigger = [];

    if (this.trigger) {
        trigger.push(html`
        <div ?hidden=${this.open} style=" margin: auto; width: 10%;">
            <sp-button primary label="${this.triggerLabel}" @click="${this.display}" ></sp-button>
        </div>
        `);
    }

    //Button management
    const buttons = [];

    if (this.noButtons) {
        buttons.push(html``);
    }
    if (this.error) {
        buttons.push(html`
            <sp-button type="primary" class="spectrum-Button spectrum-Button--primary" label="OK" @click="${this.handleCancel}"></sp-button>
        `);
    } else if (this.confirmation) {
        buttons.push(html`
            <sp-button type="primary" class="spectrum-Button spectrum-Button--primary" label="${this.cancelLabel}" @click="${this.handleCancel}"></sp-button>
            <sp-button type="cta" class="spectrum-Button spectrum-Button--cta" label="${this.okLabel}" @click="${this.handleOK}"></sp-button>
        `);
    } else if (this.information || this.scrolling) {
        buttons.push(html`
            <sp-button type="secondary" class="spectrum-Button spectrum-Button--primary" label="${this.cancelLabel}" @click="${this.handleCancel}"></sp-button>
            <sp-button type="primary" class="spectrum-Button spectrum-Button--cta" label="${this.okLabel}" @click="${this.handleOK}"></sp-button>
        `);
    } else if (this.destructive) {
        buttons.push(html`
            <sp-button type="secondary" class="spectrum-Button spectrum-Button--primary" label="${this.cancelLabel}" @click="${this.handleCancel}"></sp-button>
            <sp-button type="warning" class="spectrum-Button spectrum-Button--cta" label="${this.okLabel}" @click="${this.handleOK}"></sp-button>
        `);
    } else if (this.threeButtons) {
        buttons.push(html`
            <sp-button type="secondary" class="spectrum-Button spectrum-Button--primary" label="${this.cancelLabel}" @click="${this.handleCancel}"></sp-button>
            <sp-button type="secondary" class="spectrum-Button spectrum-Button--primary" label="${this.thirdBtnLabel}" @click="${this.handleThirdButton}"></sp-button>
            <sp-button type="primary" class="spectrum-Button spectrum-Button--cta" label="${this.okLabel}" @click="${this.handleOK}"></sp-button>
        `);
    }

    return html`
    ${trigger}
    <div class="background-overlay" ?hidden=${!this.open}>
    <div class="spectrum-Dialog ${classMap(classes)} spectrum-CSSExample-dialog" style="${demoStyles}">
    ${(this.hero) ? html`<div class="spectrum-Dialog-hero" style="background-image: url(${this.imageURL})"></div>` : html``}
        <div class="spectrum-Dialog-header">
            <h2 class="spectrum-Dialog-title">${this._title}</h2>
            ${(this.error) ? html`<sp-icon name="AlertMedium" class="spectrum-Dialog-typeIcon"></sp-icon>` : html``}
            ${(this.dismissible) ? html`<sp-button type="action" quiet label="" icon="CrossMedium" @click="${this.handleCancel}"></sp-button>` : html``}
        </div>
        <div class="spectrum-Dialog-content" style= ${(this.scrolling) ? "height: 87%;" : ""}>
            <slot></slot>
        </div>
        <div class="spectrum-Dialog-footer">
            ${buttons}
        </div>
    </div>
    </div>
    `;
}

export function templateFullscreen(this: Dialog) {

    var demoStyles = '';
    if (this.top) {
        demoStyles = `display: block !important; top: ${this.top}px !important; position: relative;`;
    }

    //Trigger 
    const trigger = [];
    if (this.trigger) {
        trigger.push(html`
        <div ?hidden=${this.open} style=" margin: auto; width: 10%;">
            <sp-button primary label="${this.triggerLabel}" @click="${this.display}" ></sp-button>
        </div>
        `);
    }

    return html `
    ${trigger}
    <div class="spectrum-Dialog spectrum-Dialog--fullscreenTakeover" >
        <div class="spectrum-Dialog-header">
            <h2 class="spectrum-Dialog-title">${this._title}</h2>
            <sp-button type="primary" class="spectrum-Button spectrum-Button--primary" label="${this.cancelLabel}" @click="${this.handleCancel}"></sp-button>
            <sp-button type="cta" class="spectrum-Button spectrum-Button--cta" label="${this.okLabel}" @click="${this.handleOK}"></sp-button>
        </div>
        <div class="spectrum-Dialog-content">
            <slot></slot>
        </div>
        <div class="spectrum-Dialog-footer">
            ${this.footerContent}
        </div>
    </div>
    `;
}
