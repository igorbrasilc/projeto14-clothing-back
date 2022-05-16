import sgMail from '@sendgrid/mail';
import db from '../db.js';

export default async function checkoutItems(req, res) {
  const {user, cart, cartTotal} = req.body;
  
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: {user},
  from: 'igorbrasilc@hotmail.com',
  subject: 'Resumo de compra',
  text: `Compra confirmada na The Hat Store! O total é $${cartTotal}, quer pagar por pix? Te enviamos depois, juro`,
  html: `Compra confirmada na The Hat Store! <strong>O total é $${cartTotal}</strong>, quer pagar por pix? Te enviamos depois, juro`,
};
(async () => {
  try {
    await sgMail.send(msg);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(422).send('Email inválido')
    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

}