import React, { useState } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';
import '../../../sass/paciente/agendamentos.scss';

const medicosDisponiveis = [
    { nome: "Dra. Mariana Souza", foto: "https://randomuser.me/api/portraits/women/21.jpg" },
    { nome: "Dr. João Silva", foto: "https://randomuser.me/api/portraits/men/22.jpg" },
    { nome: "Dra. Ana Beatriz Lima", foto: "https://randomuser.me/api/portraits/women/23.jpg" },
    { nome: "Dr. Pedro Costa", foto: "https://randomuser.me/api/portraits/men/24.jpg" },
];


const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30"
];


const locaisDisponiveis = [
    "Sede Sul - Av. Desembargador, 300",
    "Sede Norte - Rua das Flores, 123",
    "Sede Leste - Av. Central, 456",
    "Sede Oeste - Rua do Sol, 789"
];

function Agendamentos() {
    const [agendamentos, setAgendamentos] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    const [medicoSelecionado, setMedicoSelecionado] = useState(null);
    const [data, setData] = useState(null);
    const [horario, setHorario] = useState(null);
    const [local, setLocal] = useState(null);

    const openDialog = () => setDialogVisible(true);
    const closeDialog = () => setDialogVisible(false);

    const adicionarAgendamento = () => {
        if (!medicoSelecionado || !data || !horario || !local) return;

        const novoAgendamento = {
            id: Date.now(),
            nome: medicoSelecionado.nome,
            foto: medicoSelecionado.foto,
            localizacao: local,
            data: data.toLocaleDateString(),
            horario,
            agendado: true
        };

        setAgendamentos(prev => [novoAgendamento, ...prev]);
        closeDialog();

        setMedicoSelecionado(null);
        setData(null);
        setHorario(null);
        setLocal(null);
    };

    const cancelarConsulta = (id) => {
        setAgendamentos(prev => prev.filter(a => a.id !== id));
    };

    const agendamentoTemplate = (item) => (
        <div className="agendamento-card">
            <div className="agendamento-info">
                <img src={item.foto} alt={item.nome} />
                <div className="agendamento-text">
                    <p><strong>{item.nome}</strong></p>
                    <p><i className="pi pi-map-marker"></i> {item.localizacao}</p>
                    <p><i className="pi pi-calendar"></i> {item.data} <i className="pi pi-clock"></i> {item.horario}</p>
                </div>
            </div>
            <div className="agendamento-actions">
                {item.agendado && <Tag value="Agendado" icon="pi pi-check" severity="success" style={{ width: '80px', height: '30px', marginBottom: '10px' }} />}
                <Button label="Cancelar Consulta" icon="pi pi-times" className="p-button-danger" onClick={() => cancelarConsulta(item.id)} />
            </div>
        </div>
    );

    return (
        <div className="agendamentos-container">
            <div className="agendamentos-header">
                <h2>Meus Agendamentos</h2>
                <Button
                    icon="pi pi-plus"
                    severity="info"
                    onClick={openDialog}
                    className='Btn'
                >Agendar</Button>
            </div>

            <DataScroller
                value={agendamentos}
                itemTemplate={agendamentoTemplate}
                rows={3}
                inline
                scrollHeight="500px"
                className="agendamentos-scroller"
            />

            <Dialog
                header="Novo Agendamento"
                visible={dialogVisible}
                style={{ width: '30%', height: 'auto' }}
                modal
                onHide={closeDialog}
            >
                <div className="p-fluid containerModal">
                    <div className="p-field">
                        <label style={{ color: '#0d9488', paddingLeft: '5px' }}><i className="pi pi-user-md"></i> Médico</label>
                        <Dropdown
                            value={medicoSelecionado}
                            options={medicosDisponiveis}
                            optionLabel="nome"
                            onChange={(e) => setMedicoSelecionado(e.value)}
                            placeholder="Selecione o médico"
                            style={{ height: '40px', borderRadius: '10px', paddingLeft: '5px' }}
                        />
                    </div>

                    <div className="p-field">
                        <label style={{ color: '#0d9488', paddingLeft: '5px' }}><i className="pi pi-calendar"></i> Data</label>
                        <Calendar
                            value={data}
                            onChange={(e) => setData(e.value)}
                            dateFormat="dd/mm/yy"
                            showIcon
                            style={{ height: '40px', borderRadius: '10px', paddingLeft: '5px' }}
                        />
                    </div>

                    <div className="p-field">
                        <label style={{ color: '#0d9488', paddingLeft: '5px' }}><i className="pi pi-clock"></i> Horário</label>
                        <Dropdown
                            value={horario}
                            options={horariosDisponiveis}
                            onChange={(e) => setHorario(e.value)}
                            placeholder="Selecione o horário"
                            style={{ height: '40px', borderRadius: '10px', paddingLeft: '5px' }}
                        />
                    </div>

                    <div className="p-field">
                        <label style={{ color: '#0d9488', paddingLeft: '5px' }}><i className="pi pi-map-marker"></i> Local</label>
                        <Dropdown
                            value={local}
                            options={locaisDisponiveis}
                            onChange={(e) => setLocal(e.value)}
                            placeholder="Selecione o local"
                            style={{ height: '40px', borderRadius: '10px', paddingLeft: '5px' }}
                        />
                    </div>

                    <div className="p-field BtnAdicionar">
                        <Button
                            icon="pi pi-check"
                            className="btn"
                            severity='success'
                            onClick={adicionarAgendamento}
                            style={{ width: '100%' }}
                        >
                            Agendar
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default Agendamentos;
