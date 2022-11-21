import home from '../pages/home/index.js';
import { apiInfoCard } from '../apiFilms.js';
import cards from '../components/cards/cards.js';
import episode from '../pages/episodes/episode.js';

const main = document.querySelector(`#root`);
let api = apiInfoCard[0].reverse();
let urlLocal = "#episodes"
console.log(api)

let impuCard = function () {
    main.insertAdjacentHTML(`afterbegin`, home())  
    let textBtnCollection = "Movie Details"

    api.map(function (e) {
        //card (episode, title, svg, textBtn, idx, linck)
        let roman = ``;
        switch (e.episode_id) {
            case 1:
                roman = "I";
                break;
            case 2:
                roman = "II";
                break;
            case 3:
                roman = "III";
                break;
            case 4:
                roman = "IV";
                break;
            case 5:
                roman = "V";
                break;
            case 6:
                roman = "VI";
                break;
            default:
                roman = e.episode_id
                break;
        };
        //card (episode, title, svg, textBtn, data, linck)
        document.querySelector(`#cards`).insertAdjacentHTML(`afterbegin`, cards(roman, e.title, `/episode-${e.episode_id}.svg`, textBtnCollection, e.episode_id, urlLocal));
    });

    document.querySelectorAll(`.linck-episode`).forEach(function (item) {
        item.addEventListener(`click`, function (e) {
            document.querySelector(`#root`).setAttribute(`data-episode`, this.getAttribute(`data-episode`));
           
        });
    });
};

const init = function () {
    window.addEventListener(`hashchange`, function () {

        main.innerHTML = ""; //clear content main.

        switch (window.location.hash) {
            case "":
                impuCard();
                break;
            case "#episodes":
                let dataClick = main.getAttribute("data-episode");
                console.log(dataClick)
                if (dataClick > 0) {
                    main.setAttribute("data-episode", dataClick);
                    api.filter(function (api) {
                        if (api.episode_id == dataClick) {
                            let roman = ``;
                            switch (api.episode_id) {
                                case 1:
                                    roman = "I";
                                    break;
                                case 2:
                                    roman = "II";
                                    break;
                                case 3:
                                    roman = "III";
                                    break;
                                case 4:
                                    roman = "IV";
                                    break;
                                case 5:
                                    roman = "V";
                                    break;
                                case 6:
                                    roman = "VI";
                                    break;
                                default:
                                    roman = e.episode_id
                                    break;
                            };
                            //(episode, titleEpsidode, director, producer, release, synopsis)
                            main.insertAdjacentHTML(`afterbegin`, episode(`/${api.episode_id}-episode.jpg`, roman, api.title, api.director, api.producer, api.release_date, api.opening_crawl));
                        };
                    });
                };
                break;
            default:
                window.location.href = "http://localhost:8080/"
                break;
        };
    });
};

window.addEventListener("load", Promise.all(api).then(function () {         
    impuCard();
    init();
    if ( window.location.hash === "#episodes"){
        window.location.hash = "";
    }
}));
