class ThemeSwitcher extends HTMLElement {
    constructor() {
      super();
      this.theme = 'light';
      this.toggleTheme = this.toggleTheme.bind(this);
    }
  
    connectedCallback() {
      this.render();
      this.addEventListener('click', this.toggleTheme);
    }
  
    disconnectedCallback() {
      this.removeEventListener('click', this.toggleTheme);
    }
  
    toggleTheme() {
      if (this.theme === 'light') {
        document.body.classList.add('dark-theme');
        this.theme = 'dark';
      } else {
        document.body.classList.remove('dark-theme');
        this.theme = 'light';
      }
    }
  
    render() {
      this.innerHTML = `
        <style>
          .theme-switcher {
            cursor: pointer;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: inline-block;
          }
        </style>
        <div class="theme-switcher">${this.theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</div>
      `;
    }
  }
  
  customElements.define('theme-switcher', ThemeSwitcher);
  