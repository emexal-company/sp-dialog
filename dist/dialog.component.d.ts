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
