export default function (svg, episode, titleEpsidode, director, producer, release, synopsis){
    const template = `<container class="episode">
    <div class="img-movie">
        <img src="${svg}" alt="${titleEpsidode}" />
    </div>
    <div class="info">

    <header class="episode-info">
        <h2 class="episode">
            Episode ${episode}
        </h2>
        <h1 class="title-episode">${titleEpsidode}</h1>
        <div class="info-episode">
            <ul class="info-episode-details">
                <li class="info-detail-mouve">
                    <span class="episode-category">Director:</span>
                    <h3 class="episode-detail">${director}</h3>
                </li>
                <li class="info-detail-mouve">
                    <span class="episode-category">Producer:</span>
                    <h3 class="episode-detail">${producer}</h3>
                </li>
                <li class="info-detail-mouve">
                    <span class="episode-category">Release Date:</span>
                    <h3 class="episode-detail">${release}</h3>
                </li>
            </ul>
        </div>
    </header>
    <card class="content">
        <span class="episode-synopsis">
            ${synopsis}
        </span>
    </card>
    </div>
</container>`;

return template;
}