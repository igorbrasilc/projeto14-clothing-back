import db from '../db.js';
import {sgMail} from '@sendgrid/mail'

export default async function checkoutItems(req, res) {
  const {body} = req;
  
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: {body?.user},
  from: 'igorbrasilc@hotmail.com', // Use the email address or domain you verified above
  subject: 'Resumo de compra',
  text: 'Compra confirmada na The Hat Store!',
  html: '<strong>Compra confirmada na The Hat Store!</strong>',
};
// ES6
// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// ES8
(async () => {
  try {
    await sgMail.send(msg);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

}