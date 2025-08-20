import React from 'react';

function Teleconsulta() {
  return (
    <div style={{ height: '77vh', width: '100%'}}>
      <iframe
        title="Teleconsulta"
        src="https://meet.jit.si/MinhaTeleconsulta123"
        style={{ height: '100%', width: '100%', borderRadius: '20px' }}
        allow="camera; microphone; fullscreen; display-capture"
      ></iframe>
    </div>
  );
}

export default Teleconsulta;
