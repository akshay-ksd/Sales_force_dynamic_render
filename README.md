# Dynamic HTML Rendering in Salesforce

This project demonstrates how to dynamically render HTML content in Salesforce using both Lightning Web Components (LWC) and Visualforce. 

## Lightning Web Components (LWC)

### Component Code

#### HTML: `dynamicHtmlRendering.html`

```html
<template>
    <lightning-card title="Dynamic HTML Rendering" icon-name="custom:custom63">
        <div class="slds-m-around_medium">
            <lightning-input label="Enter Text" value={inputText} onchange={handleInputChange}></lightning-input>
            <lightning-button label="Render HTML" onclick={renderHtml}></lightning-button>
        </div>
        <div class="slds-m-around_medium">
            <div lwc:dom="manual" class="rendered-html"></div>
        </div>
    </lightning-card>
</template>
