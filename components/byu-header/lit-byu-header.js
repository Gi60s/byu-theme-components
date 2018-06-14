"use strict";

import * as styles from './byu-header.scss';
import {html, LitElement} from '@polymer/lit-element';

const DEFAULT_MOBILE_MAX = '1023px';

class ByuHeader extends LitElement {

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('initial mobileMaxWidth', this.mobileMaxWidth);
        // this.isMobile = false;
        // this.mobileMaxWidth = DEFAULT_MOBILE_MAX;
        console.log('m-m-w', this.getAttribute('mobile-max-width'))
    }

    attributeChangedCallback(name, old, value, namespace) {
        console.log('attrChanged', name, old, value, namespace);
        super.attributeChangedCallback(name, old, value, namespace);
    }

    static get properties() {
        console.log('static props');
        return {
            mobileMaxWidth: String,
            fullWidth: Boolean,
            isMobile: Boolean
        }
    }

    ready() {
        console.log('before ready mmw', this.mobileMaxWidth);
        super.ready();
        console.log('after ready mmw', this.mobileMaxWidth);
    }

    _render(props) {
        console.log('_render', props, this.mobileMaxWidth);
        return html`
            <style>${styles}</style>
            <div>Hi there! ${props.mobileMaxWidth}</div>
            <div>${props.isMobile}</div>
`
    }
}

customElements.define('byu-header', ByuHeader);




