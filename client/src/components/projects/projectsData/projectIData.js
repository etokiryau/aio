import project91 from '../data/img/project91.jpg';
import previewProject9 from '../data/img/previewProject9.gif';
import drawing91 from '../data/img/drawing91.png';
import drawing92 from '../data/img/drawing92.png';
import drawing93 from '../data/img/drawing93.png';
import drawing94 from '../data/img/drawing94.png';
import drawing95 from '../data/img/drawing95.png';
import drawing96 from '../data/img/drawing96.png';
import drawing97 from '../data/img/drawing97.png';
import drawing98 from '../data/img/drawing98.png';

export const projectData = {
    name: 'Project i',
    code: 'SKU: 900.951.338',
    area: '338',
    height: '7.5',
    dimensions: '14.6 x 19',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject9,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF8wMDkvMDA5X0NvdWJlX0VORy5ydnQ'
    },
    tour: {
        preview: project91,
        url: ''
    },
    descr: "Project design focuses on providing a new, indoor/outdoor living area with ample natural light, creating spaces to accommodate big families. The first design move was running a majority of the additional parallel to both house parts, connecting them with a singular linking element containing a new mudroom, powder room, and hall. It also creates a courtyard in the in-between space which makes your lifestyle more comfortable in the south. The pavillion-like roof covers both the indoor and outdoor living areas with large overhangs that shade the glass and patio during the summer. Operable windows on both sides of the living space allow for cross ventilation like the breezeway-inspired design of the patio.",
    renders: [
        project91
    ],
    drawings: [
        drawing91, 
        drawing92, 
        drawing93, 
        drawing94, 
        drawing95, 
        drawing96, 
        drawing97, 
        drawing98
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing92,
        slides: [drawing91, drawing92],
        spaces: [
            '1 Sauna - 6.39 m²',
            '2 W/C - 6.66 m²',
            '3 Chill zone - 11.78 m²',
            '4 Bedroom - 15.79 m²',
            '5 Boiler room - 10.62 m²',
            '6 Hall - 15.08 m²',
            '7 Pantry - 4.03 m²',
            '8 W/C - 3.59 m²',
            '9 Kitchen - 14.51 m²',
            '10 Living room - 3.59 m²',
            '11 Hall - 27.25 m²'
        ]
    },
    {
        name: '2 Floor', 
        preview: drawing94,
        slides: [drawing93, drawing94],
        spaces: [
            '12 Bedroom - 26.89 m²',
            '13 Wardrobe - 3.04 m²',
            '14 Wardrobe - 3.37 m²',
            '15 Bedroom - 25.64 m²',
            '16 Hall - 64.25 m²',
            '17 Master bedroom - 22.70 m²',
            '18 W/C - 5.89 m²',
            '19 W/C - 7.99 m²',
            '20 Cabinet - 14.35 m²'
        ]
    }]
};