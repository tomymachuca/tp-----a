import React from "react";
import { ArrowChevronDown } from "../../icons/ArrowChevronDown";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="separator" alt="Separator" src="/img/separator.svg" />
            <img className="img" alt="Separator" src="/img/separator-1.svg" />
            <img className="separator-2" alt="Separator" src="/img/separator-2.svg" />
          
          </div>
          <div className="most-ordered">
            <p className="title-data">Por Cobrar</p>
            <p className="desc">Personas que te deben dinero</p>
            <div className="group-4">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-5">
                <div className="group-6" />
                <div className="text">Marco Riccitelli</div>
                <div className="text-2">ARS 90.000</div>
              </div>
            </div>
            <div className="group-7">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-8" />
              <div className="text">Tomas Machuca</div>
              <div className="text-2">ARRS 80.000</div>
            </div>
            <div className="group-9">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-10" />
              <div className="text">Bautista Castro</div>
              <div className="text-2">ARS 70.000</div>
            </div>
            <div className="group-11">
              <div className="group-12" />
              <div className="text">Lionel Messi</div>
              <div className="text-2">ARS 50.000</div>
            </div>
            </div>
          <div className="most-ordered1">
            <p className="title-data"> Por Pagar </p>
            <p className="desc">Personas a las que les debes dinero</p>
            <div className="group-4">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-5">
                <div className="group-6" />
                <div className="text">Marco Riccitelli</div>
                <div className="text-2">ARS 90.000</div>
              </div>
            </div>
            <div className="group-7">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-8" />
              <div className="text">Tomas Machuca</div>
              <div className="text-2">ARRS 80.000</div>
            </div>
            <div className="group-9">
              <img className="line-7" alt="Line" src="/img/line-25-2.svg" />
              <div className="group-10" />
              <div className="text">Bautista Castro</div>
              <div className="text-2">ARS 70.000</div>
            </div>
            <div className="group-11">
              <div className="group-12" />
              <div className="text">Lionel Messi</div>
              <div className="text-2">ARS 50.000</div>
            </div>
          </div>
          <div className="rating">
            <div className="overlap-2">
              <div className="chart">
                <div className="overlap-group-3">
                  <div className="ellipse-3" />
                  <div className="text-3">85%</div>
                  <div className="text-4">Los de Futbol</div>
                  <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-17.svg" />
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <div className="ellipse-5" />
                  <div className="text-5">85%</div>
                  <div className="text-6">Mardel 2024</div>
                  <img className="ellipse-6" alt="Ellipse" src="/img/ellipse-17-1.svg" />
                </div>
              </div>
              <div className="chart-2">
                <div className="overlap-4">
                  <div className="ellipse-7" />
                  <div className="text-7">92%</div>
                  <div className="text-8">Casa Capital</div>
                  <img className="ellipse-8" alt="Ellipse" src="/img/ellipse-17-2.svg" />
                </div>
              </div>
            </div>
            <div className="title-data">Tus Gastos</div>
            <p className="desc">Grupos en los que mas gastas</p>
          </div>
          <div className="revenue">
            <div className="chart-4">
              <div className="overlap-group-5">


              </div>

            </div>
            <button className="button-2">
              <div className="view-report-wrapper">
                <div className="text-wrapper-7">Reporte</div>
              </div>
          
            </button>
            <div className="title-data">Gastado</div>
            <div className="text-wrapper-8">ARS 150.000</div>
            <p className="p">desde 1-12 Dec, 2020</p>

          {/* <div class="Gastado">
  <span class="titulo">Gastado</span>
  <span class="monto">ARS 150.000</span>
  <span class="fecha">desde 1-12 Dec, 2020</span>
</div>*/}

          </div>
          <div className="title-page">Menu</div>
          <div className="account-info">
            <div className="emoticon-wrapper">
              <div className="emoticon">🤛​</div>
            </div>
            <div className="merchant-name">Franco Magurno</div>
            <ArrowChevronDown className="arrow-chevron-down" color="#1F384C" />
            <div className="overlap-8">
              <img className="notif-icon" alt="Notif icon" src="/img/notif-icon.svg" />
              <div className="notif-sign" />
            </div>
          
          </div>
          <div className="overlap-10">
            <div className="sidebar">
              <div className="menu">
                <div className="dashboard-wrapper">
                  <div className="dashboard" onClick={() => window.location.href = '/menu'}>
                    <div className="dashboard-2">Menu</div>
                    <img className="img-2" alt="Iconly bold chart" src="/img/iconly-bold-chart.svg" />
                  </div>
                </div>
                <div className="help" onClick={() => alert('Ruta de ayuda aún no definida')}>
                  <div className="help-2">Ayuda</div>
                  <img className="img-2" alt="Iconly bold info" src="/img/iconly-bold-info-square.svg" />
                </div>

                <div className="accounts" onClick={() => alert('Ruta de cuenta aún no definida')}>
                  <div className="text-wrapper-22">Cuenta</div>
                  <img className="img-2" alt="Iconly bold profile" src="/img/iconly-bold-profile.svg" />
                </div>

                <div className="settings" onClick={() => alert('Ruta de configuraciones aún no definida')}>
                  <div className="text-wrapper-22">Configuraciones</div>
                  <img className="img-2" alt="Iconly bold setting" src="/img/iconly-bold-setting.svg" />
                </div>
{/*----------------------------version para cuando esten las rutas ----------------------------------------------------------------------------------------*/}
{/*<div className="review" onClick={() => window.location.href = '/comments'}>
  <div className="customer-review">Comentarios</div>
  <img className="img-2" alt="Iconly bold chat" src="/img/iconly-bold-chat.svg" />
</div>

<div className="manage" onClick={() => window.location.href = '/groups'}>
  <div className="text-wrapper-22">Grupos</div>
  <img className="img-2" alt="Iconly bold document" src="/img/iconly-bold-document.svg" />
</div>
*/}
                <div className="review" onClick={() => alert('Ruta de comentarios aún no definida')}>
                  <div className="customer-review">Comentarios</div>
                  <img className="img-2" alt="Iconly bold chat" src="/img/iconly-bold-chat.svg" />
                </div>

                <div className="manage" onClick={() => alert('Ruta de grupos aún no definida')}>
                  <div className="text-wrapper-22">Grupos</div>
                  <img className="img-2" alt="Iconly bold document" src="/img/iconly-bold-document.svg" />
                </div>
{/*----------------------------version para cuando esten las rutas ----------------------------------------------------------------------------------------*/}
{/*<div className="review" onClick={() => window.location.href = '/comments'}>
  <div className="customer-review">Comentarios</div>
  <img className="img-2" alt="Iconly bold chat" src="/img/iconly-bold-chat.svg" />
</div>

<div className="manage" onClick={() => window.location.href = '/groups'}>
  <div className="text-wrapper-22">Grupos</div>
  <img className="img-2" alt="Iconly bold document" src="/img/iconly-bold-document.svg" />
</div>
*/}
                <div className="order" onClick={() => window.location.href = '/add-ticket'}>
                  <div className="text-wrapper-22">Dividir Ticket</div>
                  <img className="img-2" alt="Iconly bold buy" src="/img/iconly-bold-buy.svg" />
                </div>

                <div className="text-wrapper-24">MENU</div>
              </div>
              <div className="logo">
                <div className="logo-2">
                  <div className="c-wrapper">
                    <div className="c">G</div>
                  </div>
                </div>
                <div className="name">SliceTicket</div>
              </div>
            </div>
            <img className="separator-3" alt="Separator" src="/img/separator-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
