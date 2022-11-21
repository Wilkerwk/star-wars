export default function (episode, title, svg, textBtn, data, linck){
const template =`<div class="col">
                    <div class="card">
                        <div class="row-Collection g-0">
                            <div class="col-md-6">
                                <div class="card-body-Collectio">
                                    <h5 class="card-title-Collection">Epsode ${episode}</h5>
                                    <h2 class="card-text-Collection">
                                        ${title}
                                    </h2>
                                    <div class="container-btn">
                                        <div class="btn-mdn-primary">
                                        <a class="linck-episode" data-episode="${data}" href="${linck}">
                                            <button id="btn-Collection" type="button"  class="btn btn-outline-primary">${textBtn}</button>                                          
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div class="img-container">
                            <img class="img-Collection" src="${svg}"/>
                            </div>

                        </div>
                    </div>
                </div>`
        return template;
}       