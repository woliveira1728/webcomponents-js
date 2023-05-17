class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadow = shadow
    }

    connectedCallback() {
        this.shadow.appendChild(this.build());
        this.shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLefft = document.createElement("div");
        cardLefft.setAttribute("class", "card__left")

        const author = document.createElement("a");
        author.textContent = "By " + (this.getAttribute("author") || "Anonimous");
        author.href = this.getAttribute("url-link");

        const title = document.createElement("h1");
        title.textContent = this.getAttribute("title");

        const news = document.createElement("p");
        news.textContent = this.getAttribute("news");

        cardLefft.appendChild(author);
        cardLefft.appendChild(title);
        cardLefft.appendChild(news);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__rigth")

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("photo") || "assets/default-photo.jpeg";
        newsImg.setAttribute("class", "img")

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLefft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card {
                border-radius: 30px;
                width: 80%;
                box-shadow: 6px 7px 36px 8px rgba(0,0,0,0.75);
                -webkit-box-shadow: 6px 7px 36px 8px rgba(0,0,0,0.75);
                -moz-box-shadow: 6px 7px 36px 8px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > a {
                font-weight: 400;
                color: black;
                text-decoration: none;
            }
            
            .card__left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card__left > p {
                    color: gray;
            }

            .card__rigth > img {
                border-radius: 120px;
                display: flex;
            }
        `;
        return style
    }
}

customElements.define('card-news', CardNews);