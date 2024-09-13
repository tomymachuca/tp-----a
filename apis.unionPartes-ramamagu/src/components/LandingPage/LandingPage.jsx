import "./style.css";
import { useNavigate } from 'react-router-dom'; 
import React from "react";
import { IconJamIconsOutlineLogosFacebook } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosFacebook";
import { IconJamIconsOutlineLogosInstagram4 } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosInstagram4";
import { IconJamIconsOutlineLogosLinkedin4 } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosLinkedin4";
import { IconJamIconsOutlineLogosTwitter } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosTwitter";
import { IconJamIconsOutlineLogosYoutube2 } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosYoutube2";
import { Picture } from "../Picture";


export const LandingPage = ({ headerClassName, picturePictureClassName }) => {
  const navigate = useNavigate(); 

  const handleStartFreeClick = () => {
    navigate('/sign-up');
  };

  const handleMoreInfoClick = () => {
    alert('Más información clicked');
  };

  const handleSignInClick = () => {
    navigate('/sign-in'); // Redirige a la página de Sign In
  };

  const handleSignUpClick = () => {
    navigate('/sign-up'); ;
  };

  const handlePreviousClick = () => {
    alert('Anterior clicked');
  };

  const handleNextClick = () => {
    alert('Siguiente clicked');
  };

  const handleDemoRequestClick = () => {
    alert('Solicitar demostración clicked');
  };

  return (
    <div className="landing-page">
      <div className={`header ${headerClassName}`}>
        <div className="left">
          <div className="text-wrapper-2">SliceTicket</div>
        </div>
        <div className="buttons-group">
          <button className="text-container-wrapper" onClick={handleSignInClick}>
            <div className="button-text-wrapper">
              <div className="text-wrapper-3">Ingresar</div>
            </div>
          </button>
          <button className="div-wrapper" onClick={handleSignUpClick}>
            <div className="button-text-wrapper">
              <div className="button-text-2">Registrate</div>
            </div>
          </button>
        </div>
      </div>
      <div className="section">
        <div className="section-text">
          <div className="top">
            <div className="caption">Herramienta divisora de tickets</div>
            <p className="main-headline">Divide tus gastos fácilmente con SliceTicket</p>
          </div>
          <p className="paragraph">
            SliceTicket simplifica el proceso de gestión de gastos compartidos al permitirle cargar recibos de compra,
            calcular automáticamente la contribución de cada miembro del grupo y mantener a todos en sintonía con
            desgloses financieros transparentes. Perfecto para equipos, compañeros de cuarto o amigos que dividen
            costos, SliceTicket garantiza que todos paguen su parte justa, sin complicaciones.
          </p>
          <div className="buttons-group-2">
          </div>
        </div>
        <div className="shapes">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-text-2">
          <div className="top">
            <div className="main-headline-2">Compartir gastos sin esfuerzo</div>
            <div className="secondary-headline">para cualquier grupo</div>
          </div>
          <p className="paragraph">
            SliceTicket hace que dividir los gastos dentro de cualquier grupo sea sencillo y sin estrés. Ya sea que esté
            planeando un viaje con amigos, administrando las facturas del hogar u organizando un proyecto en equipo,
            nuestra plataforma intuitiva lo ayuda a realizar un seguimiento y dividir los costos con solo unos pocos
            clics. No más confusión ni cálculos complicados: SliceTicket garantiza que todos paguen su parte justa, de
            forma automática y precisa.
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="col">
          <div className="section-text-3">
            <div className="top-2">
              <div className="main-headline-3">Simplifique sus finanzas,</div>
              <div className="secondary-headline-2">Fortalezca su grupo.</div>
            </div>
            <p className="p">
              SliceTicket le ahorra tiempo y elimina el estrés de dividir gastos al automatizar el proceso. Con cálculos
              claros y un seguimiento transparente, puede evitar malentendidos y centrarse en lo que realmente importa:
              colaborar de forma eficaz y disfrutar del tiempo juntos. Diga adiós a las conversaciones incómodas y deje
              que SliceTicket se encargue de los detalles, asegurándose de que todos estén en sintonía&#34;.
            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <Picture className="picture-instance" />
          </div>
          <div className="row-2">
            <Picture className="design-component-instance-node" />
            <Picture className="picture-2" />
          </div>
        </div>
      </div>
      <div className="section-text-wrapper">
        <div className="section-text-2">
          <div className="top">
            <div className="main-headline-2">Tu equipo. Tus proyectos.</div>
            <div className="secondary-headline">Siempre juntos.</div>
          </div>
          <div className="buttons-group-2">
            <button className="button-2" onClick={handleStartFreeClick}>
              <div className="button-text-wrapper">
                <div className="button-text-3">Empieza gratis</div>
              </div>
            </button>
            <button className="button-3" onClick={handleMoreInfoClick}>
              <div className="button-text-wrapper">
                <div className="button-text-3">Más información</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="columns">
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Recursos</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Centro de ayuda</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Blog</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Apoyo</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Contacta con nosotros</div>
              </div>
              <div className="footer-components">
                <div className="link-name-2">Desarrolladores</div>
              </div>
            </div>
          </div>
          <div className="div-3">
            <div className="footer-components">
              <div className="link-name">Compañía</div>
            </div>
            <div className="links">
              <div className="footer-components">
                <div className="link-name-2">Acerca de</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="text-wrapper-4">SliceTicket@ 2023</div>
          <div className="footer-components-2">
            <div className="link-name-wrapper">
              <a href="/terms-of-service" className="link-name-2">Términos de servicio</a>
            </div>
            <div className="link-name-wrapper">
              <a href="/privacy-policy" className="link-name-2">Política de privacidad</a>
            </div>
            <div className="link-name-wrapper">
              <a href="/cookie-management" className="link-name-2">Administrar cookies</a>
            </div>
          </div>
          <div className="div-2">
            <a href="https://youtube.com/shorts/FCbf8q7SrsQ?si=wGzJgXIrmzREzOOU" target="_blank" rel="noopener noreferrer">
              <IconJamIconsOutlineLogosYoutube2 className="icon-instance-node" color="#E2E8F0" />
            </a>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <IconJamIconsOutlineLogosFacebook className="icon-instance-node" color="#E2E8F0" />
            </a>
            <a href="https://twitter.com/tomymachuca18" target="_blank" rel="noopener noreferrer">
              <IconJamIconsOutlineLogosTwitter className="icon-instance-node" color="#E2E8F0" />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <IconJamIconsOutlineLogosInstagram4 className="icon-instance-node" color="#E2E8F0" />
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <IconJamIconsOutlineLogosLinkedin4 className="icon-instance-node" color="#E2E8F0" />
            </a>       
          </div>
        </div>
      </div>
    </div>
  );
};