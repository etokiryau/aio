import project61 from '../data/img/project61.jpg';
import project62 from '../data/img/project62.jpg';
import project63 from '../data/img/project63.jpg';
import previewProject6 from '../data/img/previewProject6.gif';
import drawing61 from '../data/img/drawing61.png';
import drawing62 from '../data/img/drawing62.png';
import drawing63 from '../data/img/drawing63.png';
import drawing64 from '../data/img/drawing64.png';
import drawing65 from '../data/img/drawing65.png';
import drawing66 from '../data/img/drawing66.png';
import drawing67 from '../data/img/drawing67.png';
import drawing68 from '../data/img/drawing68.png';

export const projectData = {
    name: 'Project f',
    code: 'SKU: 600.953.318',
    area: '318',
    height: '9.7',
    dimensions: '17.6 x 15.7',
    price: 750,
    reducedPrice: 643,
    project: {
        preview: previewProject6,
        modelUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9mLzAyXzAwMl8lRDAlQTMlRDElOEUlRDElODIlRDAlQkQlRDAlQkUlRDAlQjUlMjAlRDAlQjMlRDAlQkQlRDAlQjUlRDAlQjclRDAlQjQlRDElOEIlRDElODglRDAlQkElRDAlQkVfRU5HLnJ2dA'
    },
    tour: {
        preview: project63,
        url: ''
    },
    descr: "Design of a multi gable house makes it possible to create as many viewing axes towards nature and to create high open spaces up to the roof ridge. House consists of two characteristic blocks with a gable roof. The central part with the living room is pulled out towards the private territory part. On the other hand, the façade of this block entirely covered with brick. The white block, in which are located recreation room and bedrooms, is recessed and its scale is the same as the brick facade. Also, the house can be built on a plot with a slope and will optimally fit into the landscape views and sunlight conditions.",
    renders: [
        project61,
        project62,
        project63,
    ],
    drawings: [
        drawing61, 
        drawing62, 
        drawing63, 
        drawing64, 
        drawing65, 
        drawing66, 
        drawing67, 
        drawing68
    ],
    setup: [{
        name: '1 Floor', 
        preview: drawing62,
        slides: [drawing61, drawing62],
        spaces: [
            '1 Garage - 38.65 m²',
            '2 Bailer room - 3.70 m²',
            '3 Pantry - 4.44 m²',
            '4 Pantry - 2.02 m²',
            '5 Chill zone - 39.98 m²',
            '6 Dining room - 21.28 m²',
            '7 Kitchen - 15.11 m²',
            '8 Living room - 36.82 m²',
            '9 Hall - 15.80 m²',
            '10 W/C - 4.26 m²'
        ]
    },
    {
        name: '2 Floor', 
        preview: drawing64,
        slides: [drawing63, drawing64],
        spaces: [
            '11 Hall - 25.75 m²',
            '12 Laundry - 7.17 m²',
            '13 Bedroom - 18.70 m²',
            '14 Bedroom - 13.21 m²',
            '15 Bedroom - 16.79 m²',
            '16 Master bedroom - 18.06 m²',
            '17 W/C - 7.69 m²',
            '18 W/C - 6.88 m²',
            '19 Attic - 21.63 m²'
        ]
    }]
};