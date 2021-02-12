const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <link rel="stylesheet" href="components/header.css">
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="aboutme.html">About me</a></li>
            </ul>
        </nav>
    </header>
`

class Header extends HTMLElement {
    constructor() {
      super();
    }

connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);