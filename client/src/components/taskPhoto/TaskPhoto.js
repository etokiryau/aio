import info from './img/info.svg';
import reference from './img/reference.svg';
import brickLayer from './img/brickLayer.png';
import stub from './img/stub.svg';

import foundationRef1 from './img/foundationRef1.png';
import foundationFact1 from './img/foundationFact1.png';
import foundationRef2 from './img/foundationRef2.png';
import foundationFact2 from './img/foundationFact2.png';
import foundationRef3 from './img/foundationRef3.png';
import foundationFact3 from './img/foundationFact3.png';

import wallRef1 from './img/wallRef1.png';
import wallFact1 from './img/wallFact1.png';

import './taskPhoto.scss';

const TaskPhoto = () => {

    const dataDefault = [
        {
            info: 'The first row of bricks must be aligned and must be at the same level around the entire perimeter of the building',
            reference: brickLayer,
            fact: stub
        }
    ];

    const dataFoundation = [
        {
            info: 'При устройстве мелкозаглубленных фундаментов желательно прокладывать внутрь полотнища гидроизоляции, чтобы вода из бетона во время заливки не просачивалась в землю. Нижний пояс арматуры связан строителями некачественно, отсутствует защитный слой (расстояние между наружной поверхностью фундамента и арматуры)',
            reference: foundationRef1,
            fact: foundationFact1
        },
        {
            info: 'Для арматурного каркаса не допускается использование ржавой, загрязненной и имеющей механические повреждения арматуры. Нужно укладывать прутья без ржавчины либо зачищать их перед применением',
            reference: foundationRef2,
            fact: foundationFact2
        },
        {
            info: 'На нижнюю сетку (для создания опоры под верхнюю) необходимо устанавливать специальные пластмассовые компенсаторы, обеспечивающие равномерное распределение прутьев арматуры в теле фундамента. В данном случае вместо компенсаторов обошлись тем, что было под рукой',
            reference: foundationRef3,
            fact: foundationFact3
        }
    ];

    const dataWalls = [
        {
            info: 'Проверьте наличие утеплителя. Чтобы дом не промерзал, армопояс закрывают с внешней стороны теплоизоляционными плитами (толщиной 50 мм), из пенополистирола.',
            reference: wallRef1,
            fact: wallFact1
        }
    ];

    const renderContent = (data) => {
        const content = data.map((item, i) => {
            return (
                <div className="photo__part" key={i}>
                    <div className="photo__part-info">
                        <img src={info} alt="info" />
                        <p>{item.info}</p>
                    </div>

                    <div className="photo__part-reference">
                        <img src={reference} alt="reference" />
                        <p>Reference</p>
                    </div>
                    <img name="reference" src={item.reference} alt="bricklayer" />

                    <div className="photo__part-reference">
                        <img src={reference} alt="reference" />
                        <p>How it is built</p>
                    </div>
                    <img name="reference" src={item.fact} alt="stub" />
                </div>
            )
        });

        return content;
    }

    const content = renderContent(dataFoundation);

    return (
        <div className="photo">
            {content}
        </div>
    )
}

export default TaskPhoto;