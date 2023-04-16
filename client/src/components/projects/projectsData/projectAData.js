import project11 from '../data/img/project11.jpg';
import project12 from '../data/img/project12.jpg';
import project13 from '../data/img/project13.jpg';
import PreviewTour1 from '../data/img/previewTour1.png'
import previewProject1 from '../data/img/previewProject1.png';
import drawing11 from '../data/img/drawing11.png';
import drawing12 from '../data/img/drawing12.png';
import drawing13 from '../data/img/drawing13.png';
import drawing14 from '../data/img/drawing14.png';
import drawing15 from '../data/img/drawing15.png';
import drawing16 from '../data/img/drawing16.png';

export const projectData = {
    name: 'Project a',
    code: 'SKU: 100.951.116',
    area: '116',
    height: '6.46',
    dimensions: '6 x 21',
    price: 600,
    reducedPrice: 0,
    project: {
        preview: previewProject1,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9hL3Byb2plY3RfYV9mcmVlLm53ZA'
    },
    tour: {
        preview: PreviewTour1,
        url: 'https://streams.vagon.io/streams/a0b7e5b1-4666-4d88-b5f4-9b64acf2ffd7'
    },
    descr: 'This is a modern, single-story private house with a minimalistic cubic design. It features 2 spacious bedrooms and 2 well-appointed bathrooms. The clean lines and uncluttered aesthetic of the minimalist architecture give the house a contemporary, stylish feel. The open floor plan maximizes space and light, creating a comfortable living environment. The house is ideal for those who appreciate simplicity and functionality in their living space.',
    renders: [
        project11,
        project12,
        project13,
    ],
    drawings: [
        drawing11, 
        drawing12, 
        drawing13, 
        drawing14, 
        drawing15, 
        drawing16
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing12,
        slides: [drawing11, drawing12],
        spaces: [
            '1 Bedroom - 18.54 m²',
            '2 Bedroom - 12.28 m²',
            '3 Bathroom - 4.43 m²',
            '4 Bathroom - 4.85 m²',
            '5 Kitchen-living room - 40.35 m²',
            '6 Boiler room - 4.43 m²',
            '7 Garege - 4.43 m²'
        ]
    }]
};