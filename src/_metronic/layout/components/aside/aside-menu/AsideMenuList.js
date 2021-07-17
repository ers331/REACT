/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */

import React from "react";
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';


export function AsideMenuList({ layoutProps }) {

  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
      "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/produtos",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/produtos">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
            </span>
            <span className="menu-text">Produtos</span>
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/produtos",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/vendas">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Ticket.svg")} />
            </span>
            <span className="menu-text">Vendas</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Vendas</span>
                </span>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/vendas/lista-de-vendas"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/vendas/lista-de-vendas">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Lista de Vendas</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/vendas/ediquetas"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/vendas/etiquetas">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Etiquetas</span>
                </NavLink>
              </li>
              <li
                className={`menu-item ${getMenuItemActive(
                  "/e-commerce/products"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/vendas/separacao-de-produtos">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Separação de Produtos</span>
                </NavLink>
              </li>

            </ul>
          </div>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/vendas",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/faturamento">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
            </span>
            <span className="menu-text"> Faturamento</span>
            <i className="menu-arrow" />
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/usuarios", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/usuarios">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/user.svg")} />
            </span>
            <span className="menu-text">Usuários</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/Transportadora", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/Transportadora">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Route.svg")} />
            </span>
            <span className="menu-text">Transportadora</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/transportadora",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/suport">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Question-circle.svg")} />
            </span>
            <span className="menu-text">Suporte</span>
            <i className="menu-arrow" />
          </NavLink>
        </li>

      </ul>
    </>

  );
}
