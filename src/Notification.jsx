import React, {useState, useEffect} from 'react';

const Notification = (props) => {
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (props.balance <= 1000) {
      setNotification(true);
    }
  }, [props.balance]);

  return (
    <div className={`notification is-danger ${notification ? 'visible' : 'hidden'}`}>
      <button  onClick={() => setNotification(false)} className="delete"></button>
      <p>Your account balance is very low.</p>
      <p>You can't transfer more money today.</p>
    </div>
  )
}

export default Notification;