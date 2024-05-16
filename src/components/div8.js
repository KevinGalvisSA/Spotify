import { LitElement, css, html } from 'lit'
import infinitLogo from "/mastercard-line.svg"
import userLogo from "/Ellipse 13.svg"
import compassLogo from "/Frame 24.svg"
import earphonesLogo from "/Frame 19.svg"
import heartLogo from "/Frame 23.svg"
import bookLogo from "/Frame 20.svg"
import gearLogo from "/Frame 22.svg"
import exitLogo from "/Frame 26.svg"

export class div8 extends LitElement {
  

  constructor() {
    super();
  }

  render() {
    return html`
      <div class = "container">
        <nav class = "leftBar">
          <my-left-bar></my-left-bar>
        </nav>
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

customElements.define('my-div8', div8)

export class MyLeftBar extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="leftBar__user">
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${userLogo}>
        </a>
      </div>
      <hr>
      <div class="leftBar__options">
        <a href="#">
          <img src=${compassLogo}>
        </a>
        <a href="#">
          <img src=${earphonesLogo}>
        </a>
        <a href="#">
          <img src=${heartLogo}>
        </a>
        <a href="#">
          <img src=${bookLogo}>
        </a>
      </div>
      <div class="leftBar__exit">
        <a href="#">
          <img src=${gearLogo}>
        </a>
        <a href="#">
          <img src=${exitLogo}>
        </a>
      </div>
    `
  }

  static get styles() {
    return css`
      :host{
        display:flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
        background: gray;
        height: 98vh;
      }
      img{
        width: 2.5em;
        height: auto;
      }
      .leftBar__user{
        display: flex;
        flex-direction: column;
        margin: 2em 0;
      }
      .leftBar__options{
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        gap: 1em
      }
      .leftBar__exit{
        position: absolute;
        bottom: 5em;
        display: flex;
        flex-direction: column;
      }
    `
  }
}

customElements.define('my-left-bar', MyLeftBar); 