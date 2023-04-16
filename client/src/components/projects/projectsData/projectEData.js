import project51 from '../data/img/project51.jpg';
import project52 from '../data/img/project52.jpg';
import project53 from '../data/img/project53.jpg';
import previewProject5 from '../data/img/previewProject5.gif';
import drawing51 from '../data/img/drawing51.png';
import drawing52 from '../data/img/drawing52.png';
import drawing53 from '../data/img/drawing53.png';
import drawing54 from '../data/img/drawing54.png';
import drawing55 from '../data/img/drawing55.png';
import drawing56 from '../data/img/drawing56.png';

export const projectData = {
    name: 'Project e',
    code: 'SKU: 500.951.332',
    area: '332.5',
    height: '4.1',
    dimensions: '33 x 25.5',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject5,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9lLzA0XzAwMV9FTkcucnZ0'
    },
    tour: {
        preview: project52,
        url: ''
    },
    descr: "This one-story spacious house offers a harmonious blend of common spaces for spending time together and private bedrooms for peaceful rest. Inspired by aquariums, its architectural solutions integrate landscaping in a natural environment, creating a unique and beautiful interior. The futuristic facade, with its combination of classic white and black colors and 'floating' forms, adds a bold touch of modernity and makes it ideal for areas with a slope.",
    renders: [
        project51,
        project52,
        project53,
    ],
    drawings: [
        drawing51, 
        drawing52, 
        drawing53, 
        drawing54, 
        drawing55, 
        drawing56 
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing52,
        slides: [drawing51, drawing52],
        spaces: [
            '1 Bathroom - 8.55 m²',
            '2 Bedroom - 2.89 m²',
            '3 Hall - 4.54 m²',
            '4 Bathroom - 14.85 m²',
            '5 Office - 24.69 m²',
            '6 Living room - 33.01 m²',
            '7 Hall - 33.01 m²',
            '8 Bedroom - 11.29 m²',
            '9 Bathroom - 5.66 m²',
            '10 Wardrobe - 3.44 m²',
            '11 Bedroom - 2.89 m²',
            '12 Pantry - 2.89 m²',
            '13 Pantry - 2.89 m²',
            '14 Kitchen-dining room - 2.89 m²'
        ]
    }]
};