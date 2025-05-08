import React from 'react';
import './LesliInstalaciones.scss';

import sillas from '../../images/sillas.png';
import bote from '../../images/bote.png';
import alberca from '../../images/alberca.png';
import gimnasio from '../../images/gimnasio.png';
import NavbarLesli from './NavbarLesli';
import PiePaginaLesli from './PiePaginaLesli';
const secciones = [
    {
        titulo: "ZONA DE DESCANSO",
        texto: "Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en  Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti. ",
        imagen: sillas
    },
    {
        titulo: "SAUNA",
        texto: "Aquí puedes describir otra área, como la zona de masajes o meditación. Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.",
        imagen: bote
    },
    {
        titulo: "ALBERCA",
        texto: "Esta sección puede hablar de los aromas y esencias que usás. Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.",
        imagen: alberca
    },
    {
        titulo: "GIMNASIO",
        texto: "Describe la experiencia de estar al aire libre o en jardines. Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en Editar texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.",
        imagen: gimnasio
    }
];

const LesliInstalaciones = () => {
    return (
        <div>
            <div><NavbarLesli /></div>
            <div className='texto-dearriba'>
                <div className='texto-titulo'>LA EXPERIENCIA DE SERENIDAD</div>
                <div className='texto-parrafo'>
                    LA EXPERIENCIA DE SERENIDAD
                    Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras en tu página. En este espacio puedes contar tu historia y permitir a los usuarios saber más sobre ti.
                </div>
                <div className='texto-parrafo'>
                    Este es un gran espacio para escribir un texto largo sobre tu empresa y servicios. Puedes usar este espacio para entrar en más de detalle sobre tu empresa. Habla de tu equipo y los servicios que ofreces. Cuenta a los visitantes la historia de cómo se te ocurrió la idea de tu negocio y qué te diferencia de tus competidores. Haz que tu empresa se destaque y muestra a los visitantes quién eres.</div>
            </div>
            <div className="zigzag-container">
                {secciones.map((sec, i) => (
                    <div key={i} className={`seccion ${i % 2 === 0 ? 'normal' : 'reversa'}`}>
                        <div className="texto">
                            <div className='texto-titulo'>{sec.titulo.toUpperCase()}</div>
                            <div className='texto-parrafo'>{sec.texto}</div>
                        </div>
                        <div className="imagen">
                            <img src={sec.imagen} alt={sec.titulo} />
                        </div>
                    </div>
                ))}
            </div>
            <div><PiePaginaLesli /></div>
        </div>
    );
};

export default LesliInstalaciones;
