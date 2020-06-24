import React,  { useState } from 'react';
import axios from 'axios';
import '../style/email.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager} from 'react-notifications';

export default function Email(){
  const [mail, setMail] = useState('');
  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('/send', {"email": mail})
     .then(response => {
       setResult(response.data);
       setMail(mail);
       createNotification('success')
     })
     .catch((err) => {
       setResult({ success: false});
       createNotification('failed')
   });
  }

  const createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Mail envoyé', 'Merci pour votre soutien', 3000);
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      default:
        NotificationManager.error('Erreur lors de l\'envoie', 'Veuillez réessayer plus tard', 3000);
        break;
    }
  };

  const onInputChange = event => {
    setMail(event.target.value);
  };

  return(
    <form className="formMail container" onSubmit={sendEmail}>
      <div>
        <label htmlFor="mail">
          <input className="inputMail" onChange={onInputChange} placeholder="ex: abc@gmail.com" type="email" value={mail} name="mail" required/>
        </label>
      </div>
      <div className="containerButtonEnvoieMail">
        <button className="envoieMail" type="submit">Envoyé</button>
      </div>
      <NotificationContainer/>
    </form>
  )
}