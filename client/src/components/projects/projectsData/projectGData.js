import project71 from '../data/img/project71.jpg';
import project72 from '../data/img/project72.jpg';
import project73 from '../data/img/project73.jpg';
import previewProject7 from '../data/img/previewProject7.gif';
import drawing71 from '../data/img/drawing71.png';
import drawing72 from '../data/img/drawing72.png';
import drawing73 from '../data/img/drawing73.png';
import drawing74 from '../data/img/drawing74.png';
import drawing75 from '../data/img/drawing75.png';
import drawing76 from '../data/img/drawing76.png';
import drawing77 from '../data/img/drawing77.png';
import drawing78 from '../data/img/drawing78.png';

export const projectData = {
    name: 'Project g',
    code: 'SKU: 700.951.277',
    area: '277',
    height: '8.6',
    dimensions: '16.2 x 17.5',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject7,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9nLzBfMDAwXyVEMCU5MiVEMCVCNSVEMSU4MCVEMCVCRCVEMCVCMCVEMCVCQl9FTkcucnZ0'
    },
    tour: {
        preview: project73,
        url: ''
    },
    descr: "This modern two-story house features a spacious living and dining area that is seamlessly connected, creating an open and inviting feel. The private spaces, both for guests and the owners, are designed for maximum comfort, making it the perfect home for families with kids. The facade is accented by numerous offsets and boasts a harmonious blend of brick and decorative panels, creating a unique industrial and modern aesthetic. This house truly offers the perfect balance of style and comfort.",
    renders: [
        project71,
        project72,
        project73,
    ],
    drawings: [
        drawing71, 
        drawing72, 
        drawing73, 
        drawing74, 
        drawing75, 
        drawing76, 
        drawing77, 
        drawing78
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing72,
        slides: [drawing71, drawing72],
        spaces: [
            '1 Guest bedroom - 19 m²',
            '2 Hall - 12 m²',
            '3 Bathroom - 5 m²',
            '4 Kitchen - 18 m²',
            '5 Dining room - 23 m²',
            '6 Living room - 34 m²',
            '7 Boiler room - 9 m²',
            '8 Terrace - 29 m²'
        ]
    },
    {
        name: '2 Floor', 
        preview: drawing74,
        slides: [drawing73, drawing74],
        spaces: [
            '9 Bathroom - 7 m²',
            '10 Bathroom - 6 m²',
            '11 Laundry - 1 m²',
            '12 Balcony - 8 m²',
            '13 Master bedroom - 25 m²',
            '14 Wardrobe - 6 m²',
            '15 Wardrobe - 5 m²',
            '16 Balcony - 2 m²',
            '17 Bedroom - 14 m²',
            '18 Hall - 32 m²',
            '19 Bedroom - 23 m²'
        ]
    }]
};