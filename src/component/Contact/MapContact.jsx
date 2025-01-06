import React from "react";
import { Container, Row } from "react-bootstrap";




const MapContact = () => {

  return (
    <div className="map-contact">
      <Container>
        <Row className="my-5 px-3">
          <iframe title={"mapc"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.503414607032!2d29.965989399999994!3d31.2067795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4ae309edf09%3A0xd680c867eeaca94f!2sGreen%20Plaza%2C%20Ezbet%20El-Nozha%2C%20Sidi%20Gaber%2C%20Alexandria%20Governorate%205431116!5e0!3m2!1sen!2seg!4v1736148758574!5m2!1sen!2seg"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"            
          />


        </Row>
      </Container>

    </div>
  );
};

export default MapContact;