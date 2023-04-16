import project21 from '../data/img/project21.jpg';
import project22 from '../data/img/project22.jpg';
import project23 from '../data/img/project23.jpg';
import previewProject2 from '../data/img/previewProject2.gif';
import drawing21 from '../data/img/drawing21.png';
import drawing22 from '../data/img/drawing22.png';
import drawing23 from '../data/img/drawing23.png';
import drawing24 from '../data/img/drawing24.png';
import drawing25 from '../data/img/drawing25.png';
import drawing26 from '../data/img/drawing26.png';
import drawing27 from '../data/img/drawing27.png';
import drawing28 from '../data/img/drawing28.png';

export const projectData = {
    name: 'Project b',
    code: 'SKU: 200.951.178',
    area: '178',
    height: '7.55',
    dimensions: '18.5 x 11.4',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject2,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9iLzAtMDAzXyVEMCU5RiVEMCVCMCVEMSU4MCVEMCVCOCVEMCVCNl9FTkcucnZ0'
    },
    tour: {
        preview: project23,
        url: ''
    },
    descr: "Two-story private house with a unique, stylish minimalistic design. The first floor of the house features a large common area that is perfect for entertaining guests or simply relaxing with family. This expansive space includes an open living and dining area that is flooded with natural light from the big windows. The seamless integration of indoor and outdoor spaces creates a harmonious and inviting atmosphere. The second floor is dedicated to the owner, featuring a private office, a large bathroom, and a spacious bedroom. The house boasts a plaster and fiber cement facade, creating a sleek and modern appearance. The integration of green elements, such as trees, into the house's design enhances its natural beauty. The offset of different architectural elements adds visual interest and character to the exterior. This house is perfect for those who appreciate design and a connection to nature.",
    renders: [
        project21,
        project22,
        project23,
    ],
    drawings: [
        drawing21, 
        drawing22, 
        drawing23, 
        drawing24, 
        drawing25, 
        drawing26, 
        drawing27, 
        drawing28
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing22,
        slides: [drawing21, drawing22],
        spaces: [
            '1 Boiler room - 6.08 m²',
            '2 Utility room - 7.15 m²',
            '3 Wardrobe - 5.49 m²',
            '4 Vestibule - 4.54 m²',
            '5 Hall - 17.61 m²',
            '6 Bathroom - 6.75 m²',
            '7 Guest room - 15.65 m²',
            '8 Living room - 29.04 m²'
        ]
    },
    {
        name: '2 Floor', 
        preview: drawing24,
        slides: [drawing23, drawing24],
        spaces: [
            '10 Office - 16.06 m²',
            '11 Hall - 8.47 m²',
            '12 Bathroom - 10.58 m²',
            '13 Bedroom - 26.13 m²'
        ]
    }]
};