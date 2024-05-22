import { LitElement, css, html} from "lit";
import { newMusic } from "./components/newMusic";
import { myTrack, MyRightSection  } from "./components/track-list.js";
import { MyLeftBar } from "./components/leftbar.js";
import { MyLeftSection } from "./components/top-chart.js";
import { MyMiddleSection } from "./components/reproductor.js";



export class MyElement extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = "container">
        <nav class = "leftBar">
          <my-left-bar></my-left-bar>
        </nav>
        <div class = "leftSection">
          <my-left-section></my-left-section>
        </div>
        <div class = "middleSection">
          <my-middle-section></my-middle-section>
        </div>
        <div class = "rightSection">
          <my-right-section></my-right-section>
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      .container{
        display: grid;
        grid-template-columns: .2fr 1.5fr 2fr 1.5fr;
        height: 98vh;
        border: 1px solid black;
        gap: .5em; 
      }
      .leftBar{
        grid-column:1/2;
        /*background: red;*/
      }
      .leftSection{
        grid-column:2/3;
        /*background: blue;*/
      }
      .middleSection{
        grid-column: 3/4;
        /*background: yellow;*/
      }
      .rightSection{
        grid-column: 4/5;
        /*background: violet;*/
      }

      @media (max-width: 750px) {
        .container{
          grid-template-columns: 1fr;
        }
        .middleSection{
          grid-column:1/2;
          background: black;
        }
        .leftBar{
          display: none;
        }
        .leftSection{
          display: none;
        }
        .rightSection{
          display: none;
        }
      }
    `
  }
}
customElements.define('my-element', MyElement)