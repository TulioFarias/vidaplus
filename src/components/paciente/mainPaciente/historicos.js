import { useState } from 'react';
import { DataScroller } from 'primereact/datascroller';
import '../../../sass/paciente/historico.scss';
import { InputText } from 'primereact/inputtext';


const historicosOriginais = [
    { id: 1, tipo: "Consulta", descricao: "Consulta com Dr. João Silva - Cardiologista", data: "2025-07-10" },
    { id: 2, tipo: "Exame", descricao: "Exame de sangue completo", data: "2025-07-15" },
    { id: 3, tipo: "Cirurgia", descricao: "Cirurgia de apendicite", data: "2025-07-20" },
    { id: 4, tipo: "Consulta", descricao: "Consulta com Dra. Mariana Souza - Urologista", data: "2025-06-18" },
    { id: 5, tipo: "Exame", descricao: "Raio-X do tórax", data: "2025-06-25" },
    { id: 6, tipo: "Cirurgia", descricao: "Cirurgia de hérnia", data: "2025-05-30" },
    { id: 7, tipo: "Consulta", descricao: "Consulta com Dr. Pedro Costa - Neurologista", data: "2025-05-10" },
    { id: 8, tipo: "Exame", descricao: "Ultrassom abdominal", data: "2025-04-22" },
    { id: 9, tipo: "Cirurgia", descricao: "Cirurgia de vesícula", data: "2025-04-15" },
];

const tipoIcon = {
    "Consulta": "pi pi-user-md",
    "Exame": "pi pi-file",
    "Cirurgia": "pi pi-briefcase"
};

function HistoricoMedico() {
    const [historicos, setHistoricos] = useState(historicosOriginais);
    const [filtro, setFiltro] = useState("");

    const onFiltroChange = (e) => {
        const valor = e.target.value.toLowerCase();
        setFiltro(valor);
        setHistoricos(
            historicosOriginais.filter(item =>
                item.tipo.toLowerCase().includes(valor) ||
                item.descricao.toLowerCase().includes(valor) ||
                item.data.includes(valor)
            )
        );
    };

    const historicoTemplate = (item) => (
        <div className="historico-card">
            <div className="historico-icon">
                <i className={`${tipoIcon[item.tipo]} historico-pi`}></i>
            </div>
            <div className="historico-info">
                <p><strong>{item.tipo}</strong></p>
                <p>{item.descricao}</p>
                <p>{item.data}</p>
            </div>
        </div>
    );

    return (
        <div className="historico-container">
            <h2>Consulte aqui seu histórico médico</h2>
            <InputText
                value={filtro}
                onChange={onFiltroChange}
                placeholder="Buscar histórico..."
                className="historico-search"
            />
            <DataScroller
                value={historicos}
                itemTemplate={historicoTemplate}
                rows={50}
                inline
                className='containerScroller'
                
            />
        </div>
    );
}

export default HistoricoMedico;
