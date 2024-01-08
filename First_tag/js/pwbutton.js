class PwButton extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
    
        <button><slot></slot></button>
        `
    }

}

customElements.define('pw-button', PwButton)