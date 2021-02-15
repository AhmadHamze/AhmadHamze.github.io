const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        nav {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
        }
        
        ul li {
            list-style: none;
            display: inline;
            padding: 50px;
        }
        
        li {
            float: left;
        }
        
        a:hover {
            text-decoration: none;
            color:chocolate;
        }
        
        a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
            font-size: 30px;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    
    </style
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="blogs.html">Blogs</a></li>
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