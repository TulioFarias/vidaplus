
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';


 function Consultas() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const horarios = [
        '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00'
    ];

    return (
        <div className="consultas-container">
            <div className="consultas-header">
                <h3>Agendamentos</h3>
                <p>Gerencie suas consultas e horários</p>
                <Button label="Novo" icon="pi pi-plus" className="p-button-success" />
            </div>

            <div className="consultas-body">
             
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.value)}
                        inline
                    />
                </div>

            
                <div className="horarios-container">
                    <table className="horarios-table">
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Paciente / Consulta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {horarios.map((hora) => (
                                <tr key={hora}>
                                    <td>{hora}</td>
                                    <td>{}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Consultas;