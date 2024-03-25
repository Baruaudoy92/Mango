import React from 'react';
import "./homecontact.css";

function Homecontact() {
  return (
    <div className="main_1">
      <div className="first_1">
        <h1 className='conme'>Contact me</h1>
        <form action="submit">
          <ul>
            <li className="half">
              <input type="text" name="name" defaultValue="Name" />
            </li>
            <li>
              <input type="email" name="email" placeholder="Email" />
            </li>
            <li>
               {/* Text field will clear onFocus */}
              <input
                type="text"
                onFocus={(e) => e.target.value = ""}
                name="subject"
                defaultValue="Subject"
              />
            </li>
            <li>
               {/* Text area for message */}
              <textarea name="message" defaultValue="Message"></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
        {/* Map section */}
      <div>
        {/* Embedded Google Maps iframe */}
        <iframe
          src="https://maps.google.com/maps?q=35.856737,10.606619&z=15&output=embed"
          width="360"
          height="270"
          frameBorder="0"
          style={{ border: "0" }}
          title="location"
        ></iframe>
      </div>
    </div>
  );
}

export default Homecontact;
