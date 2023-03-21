const {Router} = require('express');
const nodemailer = require("nodemailer");

const router = Router();

router.post(
    '/contact',
    async (req, res) => {
        try {
            const { name, email, telephone } = req.body;
  
            const transporter = nodemailer.createTransport({
                host: "smtp.yandex.ru",
                port: 465,
                secure: true,
                auth: {
                    user: "info@aio.house",
                    pass: "",
                },
            });
            
            const mailOptions = {
                from: "info@aio.house",
                to: "info@aio.house",
                subject: "New inquire for contacting from website",
                text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}`,
            };
  
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({message: "Error sending email"});
                } else {
                    console.log("Email sent: " + info.response);
                    res.status(200).json({message: 'Email sent'});
                }
            });

        } catch(e) {
            res.status(500).json({message: 'Something went wrong, try to submit one more time'})
        }
    }
);

router.post(
    '/service',
    async (req, res) => {
        try {
            const { name, email, telephone, comment, area, sections, service, totalCost } = req.body;
           
            const transporter = nodemailer.createTransport({
                // host: "smtp.mail.ru",
                // port: 465,
                // secure: true,
                // auth: {
                //     user: "gitarist2303@mail.ru",
                //     pass: "",
                // },

                host: "smtp.yandex.ru",
                port: 465,
                secure: true,
                auth: {
                    user: "info@aio.house",
                    pass: "",
                },
            });

            const makeProperServiceView = (service) => {
                let result;

                switch(service) {
                    case 'individual':
                        result = 'Individual design';
                        break;
                    case 'modelling':
                        result = '2D to 3D';
                        break;
                    case 'changes':
                        result = 'Making changes to the finished project';
                        break;
                    default:
                        result = 'Nothing'
                        break;
                }

                return result;
            };

            const makeProperSectionsView = (sections) => {
                let result = '';

                sections.forEach((section, i) => {
                    let item;

                    switch(section) {
                        case 'architecture':
                            item = 'Architecture';
                            break;
                        case 'structure':
                            item = 'Structural engineering';
                            break;
                        case 'mep':
                            item = 'Mechanical, electrical and plumbing';
                            break;
                        default: 
                            item = '';
                            break;
                    }

                    result += i === 0 ? item : ` | ${item}`;
                })

                return result;
            };

            const properSectionsView = makeProperSectionsView(sections);
            const properServiceView = makeProperServiceView(service);
            
            const mailOptions = {
                // from: "gitarist2303@mail.ru",
                // to: "gitarist2303@mail.ru",

                from: "info@aio.house",
                to: "info@aio.house",
                subject: "New inquire for service from website",
                text: `
                    Name: ${name}\n
                    Email: ${email}\n
                    Telephone: ${telephone}\n
                    Comment: ${comment}\n
                    Total cost: ${totalCost}USD\n
                    Area: ${area} m2\n
                    Service: ${properServiceView}\n
                    Sections: ${properSectionsView}
                `,
            };
  
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({message: "Error sending email"});
                } else {
                    console.log("Email sent: " + info.response);
                    res.status(200).json({message: "Email sent"});
                }
            });

        } catch(e) {
            res.status(500).json({message: 'Something went wrong, try to submit one more time'})
        }
    }
);

module.exports = router;
