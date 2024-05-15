import { LitElement, html, css } from "lit";

export class titlesTopChart extends LitElement {
    constructor() {
        super()
        this.classText = "container_text"
        this.classTitle = "container_title"
    }
    static properties = {
        classText: {typeof: String},
        classTitle: {typeof: String}
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container{
            width: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-between
        }
        .container_title {
            text-transform: capitalize;
            font-size: 2em;
            margin-block-start: 0em;
            margin-block-end: 0em
        }
        .container_text {
            display:flex;
            justify-content: space-between;
        }
    `
    render() {
        return html`
            <div class="container">
                <h1 class="${this.classTitle}">discover new music</h1>
                <div class="${this.classText}">
                    <h3 class="title_1">Top-chart</h3> 
                    <h3 class="title_2">Week </h3>
                </div> 
            </div>
        `
    }
}

customElements.define("top-chart", titlesTopChart)