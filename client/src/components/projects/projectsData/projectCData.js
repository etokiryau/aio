import project31 from '../data/img/project31.jpg';
import project32 from '../data/img/project32.jpg';
import project33 from '../data/img/project33.jpg';
import previewProject3 from '../data/img/previewProject3.gif';
import drawing31 from '../data/img/drawing31.png';
import drawing32 from '../data/img/drawing32.png';
import drawing33 from '../data/img/drawing33.png';
import drawing34 from '../data/img/drawing34.png';
import drawing35 from '../data/img/drawing35.png';
import drawing36 from '../data/img/drawing36.png';
import drawing37 from '../data/img/drawing37.png';
import drawing38 from '../data/img/drawing38.png';

export const projectData = {
    name: 'Project c',
    code: 'SKU: 300.951.240',
    area: '240',
    height: '7.79',
    dimensions: '19.9 x 13.2',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject3,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9jLzAtMDAyXyVEMCVBRiVEMCVCOSVEMSU4NiVEMCVCRV9FTkdfdjEucnZ0'
    },
    tour: {
        preview: project32,
        url: ''
    },
    descr: "This 2-story house has a minimalist cubic design with sun protection features and a white plaster facade to regulate inner temperature. The windows are specifically orientated to prevent direct sunlight in southern regions, yet still allow for plenty of natural light to come in. The main living area is spacious and divided into different levels, with an open-to-below design, interior green elements, and a glazed roof that provides sun exposure. The design also allows for good segregation of space, making it ideal for families with kids.",
    renders: [
        project31,
        project32,
        project33,
    ],
    drawings: [
        drawing31, 
        drawing32, 
        drawing33, 
        drawing34, 
        drawing35, 
        drawing36, 
        drawing37, 
        drawing38
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing32,
        slides: [drawing31, drawing32],
        spaces: [
            '1 Living room - 35.31 m²',
            '2 Guest room - 24.87 m²',
            '3 Bathroom - 5.61 m²',
            '4 Hall - 8.45 m²',
            '5 Dining room - 36.16 m²',
            '6 Kitchen - 27.05 m²'
        ]
    },
    {
        name: '2 Floor', 
        preview: drawing34,
        slides: [drawing33, drawing34],
        spaces: [
            '7 Hall - 22.67 m²',
            '8 Master bedroom - 22.41 m²',
            '9 Bathroom - 11.63 m²',
            '10 Wardrobe - 8.59 m²',
            '11 Bedroom - 29.49 m²',
            '12 Bathroom - 6.09 m²'
        ]
    }]
};