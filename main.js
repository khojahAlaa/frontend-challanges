const challanges = [
    {
        "id" : 1,
        "image" : './design/four-card-preview.jpg',
        "challangeTitle" : 'four card feature',
        "previewLink" : './four_card_feature_section/four_card_feature_section.html',
        "sourceCodeLink" : 'https://github.com/khojahAlaa/frontend-challanges/tree/main/four_card_feature_section',
    },
    {
        "id" : 2,
        "image" : './design/social-proof-section-review.jpg',
        "challangeTitle" : 'Social Proof Section',
        "previewLink" : './social_proof_section/social_proof_section.html',
        "sourceCodeLink" : 'https://github.com/khojahAlaa/frontend-challanges/tree/main/social_proof_section',
    },
    {
        "id" : 3,
        "image" : './design/testimonials-card-preview.jpg',
        "challangeTitle" : 'Testimonials Card',
        "previewLink" : './Testimonials_grid_section/Testimonials_grid_section.html',
        "sourceCodeLink" : 'https://github.com/khojahAlaa/frontend-challanges/tree/main/Testimonials_grid_section',
    },
    {
        "id" : 4,
        "image" : './design/fylo-dark-landingpage-preview.jpg',
        "challangeTitle" : 'Fylo Dark landingpage',
        "previewLink" : './fylo-dark-them-landing-page/fylo-dark-them-landing-page.html',
        "sourceCodeLink" : 'https://github.com/khojahAlaa/frontend-challanges/tree/main/fylo-dark-them-landing-page',
    },
    {
        "id" : 5,
        "image" : './design/chat-app-illustration-preview.jpg',
        "challangeTitle" : 'Chat App Illustration',
        "previewLink" : './chat-app-css-illustration/chat-app-css-illustration.html',
        "sourceCodeLink" : 'https://github.com/khojahAlaa/frontend-challanges/tree/main/chat-app-css-illustration',
    },
];

function load() {
    challanges.forEach((i, index)=> {
        let card =document.createElement('div');
        card.innerHTML= `
            <div id="${i.id}" class="card">
                <img class="card__img" src="${i.image}" alt="" />

                <div class="card-content card-content--smSecreen">
                    <h2 class="card__title"><b>${i.challangeTitle} </b></h2>
                    <div class="action">
                        <a href="${i.previewLink}" title="preview page">
                            <i class="fas fa-eye"></i>
                        </a>
                        <a href="${i.sourceCodeLink}"
                            class="code" title="source code">
                            <i class="fas fa-code"></i>
                        </a>
                    </div>
                </div>
                <div class="card-content card-content--bgSecreen">
                    <h2 class="card__title"><b> ${i.challangeTitle} </b></h2>
                    <div class="action">
                        <a class="btn preview--filled"
                            href="${i.previewLink}" target="_blank"
                            title="preview page">
                            <i class="fas fa-eye"></i>
                            preview
                        </a>
                        <a href="${i.sourceCodeLink}"
                            class="btn code--outline" target="_blank" title="source code">
                            <i class="fas fa-code"></i>
                            source code
                        </a>
                    </div>
                </div>
            </div>
        `

        const challangesCards = document.getElementById("allChallanges"); 
        challangesCards.append(card)
    });
}
load();