import React, {useState} from "react";
import './style.css'

function Avatar(props) {
    let [status, updateStatus] = useState(() =>'green');
    let [opacity, updateOpacity] = useState(() => 1);
    let [offlineMsg, createOfflineMsg] = useState(() => '')
    
    const handleClick = e => {
        updateStatus(status === 'green' ? 'red' : 'green');
        updateOpacity(opacity === 1 ? 0.5 : 1);
    }

      return (
        <section className="avatar__container">
            <img style={{opacity: opacity}} onClick={handleClick}  className="avatar__img" src={props.img}></img>
            <div className="avatar__status-container">
              <div style={{backgroundColor: status}} className="avatar__status"></div>
              <p className="avatar__name">{props.name}</p>
            </div>
            <p className="avatar__offline-message">{offlineMsg}</p>
        </section>
      )
}

export default Avatar;