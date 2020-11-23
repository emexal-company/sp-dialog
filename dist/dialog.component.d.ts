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
import { Base } from '@spectrum/sp-base';
import '@spectrum/sp-button';
export declare class Dialog extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    _title: string;
    okLabel: string;
    cancelLabel: string;
    thirdBtnLabel: string;
    top: string;
    imageURL: string;
    footerContent: string;
    noDivider: boolean;
    fullscreen: boolean;
    noButtons: boolean;
    confirmation: boolean;
    information: boolean;
    scrolling: boolean;
    destructive: boolean;
    threeButtons: boolean;
    error: boolean;
    open: boolean;
    dismissible: boolean;
    hero: boolean;
    small: boolean;
    medium: boolean;
    large: boolean;
    alert: boolean;
    trigger: boolean;
    triggerLabel: String;
    show(): void;
    hide(): void;
    display(): void;
    protected handleCancel(): void;
    protected handleOK(): void;
    protected handleThirdButton(): void;
    protected notifyClick(ok: boolean): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-dialog': Dialog;
    }
}
