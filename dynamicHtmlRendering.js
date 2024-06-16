import { LightningElement } from 'lwc';

export default class DynamicHtmlRendering extends LightningElement {
    inputText = '';

    handleInputChange(event) {
        this.inputText = event.target.value;
    }

    renderHtml() {
        const htmlContainer = this.template.querySelector('.rendered-html');
        htmlContainer.innerHTML = this.inputText;
    }
}
