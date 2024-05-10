class CardComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const template = `
        <style>
          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            margin: 10px;
            width: 300px;
          }
  
          .card img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 15px;
          }
  
          .card h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }
  
          .card p {
            font-size: 14px;
          }
        </style>
        <div class="card">
          <img src="${this.getAttribute('imagem')}" alt="${this.getAttribute('alt')}">
          <h3>${this.getAttribute('titulo')}</h3>
          <p>${this.getAttribute('descricao')}</p>
        </div>
      `;
  
      this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
  }
  
  customElements.define('card-component', CardComponent);
  