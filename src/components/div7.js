import { LitElement, css, html} from "lit";
import infinitLogo from "/mastercard-line.svg"
import userLogo from "/Ellipse 13.svg"
import compassLogo from "/Frame 24.svg"
import earphonesLogo from "/Frame 19.svg"
import heartLogo from "/Frame 23.svg"
import bookLogo from "/Frame 20.svg"
import gearLogo from "/Frame 22.svg"
import exitLogo from "/Frame 26.svg"
import { newMusic } from "./newMusic";

export class myTrack extends LitElement{ 
    static properties = {
      songs: {type: Array}
    };

  
    constructor() {
      super();
      this.song = []
      this.loadSong();
    }

    async loadSong() {
      const url = 'https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=30';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '29392637f6msh22f35e67f4b3080p17fbe7jsn0806c5a433fb',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.songs = result.data.artist.discography.singles.items;
        this.requestUpdate();
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
    }
  
    render() {
      return html`
      <div>
        ${Array.isArray(this.songs) && this.songs.length > 0 ? 
        this.songs.map(song => html`
        <div class="card">
        <div class="cards">
            <div class="cards_info">
                <div class="aling"><button  type="button"> <box-icon name='menu'></box-icon></button></div>
                <div class="img"><img src="${song.releases.items[0].coverArt.sources[0].url}"></div>
                <div class="Titule_and_artis">
                    <h3>${song.releases.items[0].name}</h3>
                </div>
                </div>
                <div class="minutes_and_date">
                <h5>${song.releases.items[0].date.year}</h5>
            </div>
        </div>
    </div>  `)

     : 
      html`<p>No hay canciones disponibles</p>`
    }
    </div>
`;
}

    static styles = css`
    .card {
      margin: 10px;
      padding: 0;
  }

  .cards{
      background: white;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden; 
      margin-bottom: 10px
  }

  .cards h3{
    margin: 5px;
    font-size: 15px ;
  }

  .cards h5{
    margin: 0;
    color: rgb(124, 124, 124);
  }

  .cards button{
    background: none;
    border: none;
  }

  .card button:hover{
    cursor: pointer;
  }

  .cards .cards_info{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cards .cards_info .img{
    height: 50px;
    width: 50px
  }

  .cards .cards_info .img img{
    height: 50px;
    width: 50px;
    object-fit: cover;
  }

  .cards .minutes_and_date{
    padding-right: 10px
  }
    `
}   
customElements.define('my-track', myTrack);

export class div7 extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = "container">
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
customElements.define('my-div7', div7)

export class MyRightSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = rightSection__container>
        <div class = "rightSection__title"><h1>Track list</h1></div>
        <div class = "rightSection__tools"><box-icon name='repost' color='#908e8e' ></box-icon> <box-icon name='shuffle' color='#908e8e'></box-icon></div>
        <div class = "rightSection__playingNext"><h3>Playing next<h3></div>
        <div class = "rightSection__Songs"><my-track></my-track></div>
      </div>
    `
  }

  static get styles() {
    return css`
      .rightSection__container{
        display: grid;
        grid-template-areas: 
        "title",
        "tools",
        "playingNext",
        "Song";
        grid-template-rows: repeat(4, 1fr);
        height: 96vh;
        padding: 1em 0;
        gap: .1em;
      }
      .rightSection__title{
        grid-areas: "title";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .rightSection__title h1{
        color: #333333;
        font-size: 2.5em;
        margin-left: 10px;
      }
      .rightSection__tools{
        grid-areas: "tools";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .rightSection__playingNext{
        grid-areas: "playingNext";
        background: white;
        height: 5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .rightSection__Songs{
        grid-areas: "Song";
        background: white;
        height: 80vh;
        overflow: scroll
      }

      .rightSection__Songs::-webkit-scrollbar {
        display: none;
      }
    `
  }
}
customElements.define('my-right-section', MyRightSection); 