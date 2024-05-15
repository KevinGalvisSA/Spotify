import { LitElement, css, html } from "lit";
import { newMusic } from "./newMusic";
import { titlesTopChart } from "./titleTopChart";

export class gridSpotify extends LitElement {
    constructor() {
        super()
    }
    static styles = css`
        .main {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(10, 1fr);
            gap: 5px;
        }
        .top-chart { 
            grid-area: 1 / 2 / 3 / 5; 
            background-color: red;
        }
        .new-music {
            grid-area: 3 / 2 / 8 / 5;
            background-color: blue;
            }
        .div3 {
            grid-area: 8 / 2 / 11 / 5;
            background-color: yellow;
        }
        .div4 { 
            grid-area: 1 / 5 / 2 / 9; 
            background-color: violet;
        }
        .div5 { 
            grid-area: 2 / 5 / 11 / 9;
            background-color: green;
        }
        .div6 { 
            grid-area: 1 / 9 / 3 / 11; 
            background-color: orange;
        }
        .div7 {
            grid-area: 3 / 9 / 11 / 11; 
            background-color: pink;
        }
        .div8 { 
            grid-area: 1 / 1 / 11 / 2; 
            background-color: purple;
        }
    `
    render() {
        return html`
            <main class="main">
                <top-chart class="top-chart"></top-chart>
                <new-music class="new-music"></new-music>
                <my-div3 class="div3"></my-div3>
                <my-div4 class="div4"></my-div4>
                <my-div5 class="div5"></my-div5>
                <my-div6 class="div6"></my-div6>
                <my-div7 class="div7"></my-div7>
                <my-div8 class="div8"></my-div8>
            </main>
        `
    }
} 

customElements.define('grid-spotify', gridSpotify)