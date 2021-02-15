const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #0a0a23;
        }
        
        i {
          font-size: 45px;
          text-align: center;
          display: block;
          color: white;
        }
        
        i:hover {
          color: blue;
        }
        
        ul li {
          list-style: none;
          display: inline;
          padding: 0 100px;
        }
        
        li {
            float: left;
        }
        
        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2.5rem;            /* Footer height */
        }
    </style>
        <!--Font awesome link-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <footer>
      <nav>
        <ul>
            <li><a href="mailto:ahmadhamze@yahoo.com"><i class="fa fa-envelope fa-3x"></i></a></li>
            <li><a href="https://github.com/AhmadHamze"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ahmad-hamze-4161a0170/"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </nav>
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