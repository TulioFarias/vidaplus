import React, { useState } from 'react';
import { Tag } from 'primereact/tag';
import './../../../sass/paciente/consultas.scss';

const horarios = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00'
];

const agendamentos = [
    { data: '2025-08-20', horario: '08:00', medico: 'Dra. Mariana Souza', tipo: 'Consulta', local: 'Sede Sul' },
    { data: '2025-08-20', horario: '10:00', medico: 'Dr. João Silva', tipo: 'Exame', local: 'Sede Norte' },
    { data: '2025-08-21', horario: '14:00', medico: 'Dra. Ana Beatriz Lima', tipo: 'Cirurgia', local: 'Sede Sul' },
    { data: '2025-08-21', horario: '15:00', medico: 'Dr. Pedro Costa', tipo: 'Consulta', local: 'Sede Leste' },
];

function AgendaVisual() {
    const [dias, setDias] = useState([
        '2025-08-20',
        '2025-08-21',
        '2025-08-22',
        '2025-08-23',
        '2025-08-24',
    ]);

    const getAgendamento = (dia, horario) => {
        return agendamentos.filter(a => a.data === dia && a.horario === horario);
    };

    return (
        <div className="agenda-container">
            <div className="agenda-grid">
                {/* Cabeçalho dias */}
                <div className="agenda-header horario-col">Horário</div>
                {dias.map(dia => (
                    <div key={dia} className="agenda-header">{dia}</div>
                ))}

                {/* Linhas de horários */}
                {horarios.map(hora => (
                    <React.Fragment key={hora}>
                        <div className="horario-col">{hora}</div>
                        {dias.map(dia => {
                            const ags = getAgendamento(dia, hora);
                            return (
                                <div key={dia + hora} className="agenda-cell">
                                    {ags.length > 0 ? ags.map((ag, i) => (
                                        <div key={i} className="agendamento-card">
                                            <strong>{ag.medico}</strong>
                                            <p>{ag.tipo}</p>
                                            <p>{ag.local}</p>
                                            <Tag value={ag.tipo} severity={
                                                ag.tipo === 'Consulta' ? 'info' :
                                                ag.tipo === 'Exame' ? 'warning' :
                                                'success'
                                            } style={{ fontSize: '0.7rem' }} />
                                        </div>
                                    )) : <div className="agendamento-vazio">-</div>}
                                </div>
                            )
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default AgendaVisual;
