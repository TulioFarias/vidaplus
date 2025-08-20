import React from 'react';
import { Tag } from 'primereact/tag';
import 'primeicons/primeicons.css';
import '../../../sass/paciente/medicos.scss';

const medicos = [
    {
        nome: "Dra. Mariana Souza",
        sexo: "Feminino",
        formacao: "Medicina - USP",
        experiencia: "Urologia, Cirurgia Minimamente Invasiva",
        especialidade: "Urologista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        nome: "Dr. João Silva",
        sexo: "Masculino",
        formacao: "Medicina - Unifor",
        experiencia: "Cardiologia, Emergência",
        especialidade: "Cardiologista",
        disponivel: "ultimas",
        foto: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        nome: "Dra. Ana Beatriz Lima",
        sexo: "Feminino",
        formacao: "Medicina - UFRJ",
        experiencia: "Dermatologia, Estética",
        especialidade: "Dermatologista",
        disponivel: "sem",
        foto: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
        nome: "Dr. Pedro Costa",
        sexo: "Masculino",
        formacao: "Medicina - UFPE",
        experiencia: "Neurologia, Psiquiatria",
        especialidade: "Neurologista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/men/24.jpg"
    },
    {
        nome: "Dra. Camila Ribeiro",
        sexo: "Feminino",
        formacao: "Medicina - UnB",
        experiencia: "Pediatria, Neonatologia",
        especialidade: "Pediatra",
        disponivel: "ultimas",
        foto: "https://randomuser.me/api/portraits/women/25.jpg"
    },
    {
        nome: "Dr. Lucas Martins",
        sexo: "Masculino",
        formacao: "Medicina - UFMG",
        experiencia: "Ortopedia, Traumatologia",
        especialidade: "Ortopedista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/men/26.jpg"
    },
    {
        nome: "Dra. Fernanda Oliveira",
        sexo: "Feminino",
        formacao: "Medicina - Unicamp",
        experiencia: "Ginecologia, Obstetrícia",
        especialidade: "Ginecologista",
        disponivel: "sem",
        foto: "https://randomuser.me/api/portraits/women/27.jpg"
    },
    {
        nome: "Dr. Rafael Lima",
        sexo: "Masculino",
        formacao: "Medicina - UFPR",
        experiencia: "Psiquiatria, Psicoterapia",
        especialidade: "Psiquiatra",
        disponivel: "ultimas",
        foto: "https://randomuser.me/api/portraits/men/28.jpg"
    },
    {
        nome: "Dra. Beatriz Santos",
        sexo: "Feminino",
        formacao: "Medicina - USP",
        experiencia: "Cardiologia, Medicina Interna",
        especialidade: "Cardiologista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
        nome: "Dr. Gustavo Almeida",
        sexo: "Masculino",
        formacao: "Medicina - UFRJ",
        experiencia: "Urologia, Cirurgia",
        especialidade: "Urologista",
        disponivel: "sem",
        foto: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        nome: "Dra. Letícia Ferreira",
        sexo: "Feminino",
        formacao: "Medicina - Unifor",
        experiencia: "Neurologia, Pesquisa Clínica",
        especialidade: "Neurologista",
        disponivel: "ultimas",
        foto: "https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
        nome: "Dr. Henrique Barbosa",
        sexo: "Masculino",
        formacao: "Medicina - UFPE",
        experiencia: "Ortopedia, Reabilitação",
        especialidade: "Ortopedista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        nome: "Dra. Patricia Nunes",
        sexo: "Feminino",
        formacao: "Medicina - UFMG",
        experiencia: "Pediatria, Emergência",
        especialidade: "Pediatra",
        disponivel: "sem",
        foto: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        nome: "Dr. Fernando Costa",
        sexo: "Masculino",
        formacao: "Medicina - UnB",
        experiencia: "Cardiologia, Medicina Interna",
        especialidade: "Cardiologista",
        disponivel: "ultimas",
        foto: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
        nome: "Dra. Juliana Rocha",
        sexo: "Feminino",
        formacao: "Medicina - Unicamp",
        experiencia: "Ginecologia, Obstetrícia",
        especialidade: "Ginecologista",
        disponivel: "disponivel",
        foto: "https://randomuser.me/api/portraits/women/35.jpg"
    },
];

// Função para mapear status para cor da Tag
const getTagSeverity = (status) => {
    switch(status) {
        case "disponivel": return "success"; 
        case "ultimas": return "warning";    
        case "sem": return "danger";         
        default: return "info";
    }
};

function MedicosDisponiveis() {
    return (
        <div className="medicos-container">
            <div className="medicos-grid">
                {medicos.map((medico, index) => (
                    <div className="medico-card" key={index}>
                        <div className="medico-header">
                            <img src={medico.foto} alt={medico.nome} />
                            <h3><i className="pi pi-user-md"></i> {medico.especialidade}</h3>
                        </div>
                        <div className="medico-body">
                            <p><i className="pi pi-id-card"></i> <strong>{medico.nome}</strong></p>
                            <p><i className="pi pi-book"></i> {medico.formacao}</p>
                            <p><i className="pi pi-briefcase"></i> {medico.experiencia}</p>
                        </div>
                        <div className="medico-footer">
                            <Tag
                                className='tag'
                                value={
                                    medico.disponivel === "disponivel" ? "Agendamento disponível" :
                                    medico.disponivel === "ultimas" ? "Últimas vagas" :
                                    "Sem vagas"
                                } 
                                severity={getTagSeverity(medico.disponivel)} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedicosDisponiveis;
