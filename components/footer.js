const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <link rel="stylesheet" href="components/footer.css">
        <!--DevIcons link-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css">
        <!--Font awesome link-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <footer>
        <ul>
            <li><a href="mailto:ahmadhamze@yahoo.com"><i class="far fa-envelope fa-3x"></i></a></li>
            <li><a href="https://github.com/AhmadHamze"><i class="devicon-github-original"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ahmad-hamze-4161a0170/"><i class="devicon-linkedin-plain"></i></a></li>
        </ul>
    </footer>
`

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(footerTemplate.content);
    }
  }
  
  customElements.define('footer-component', Footer);