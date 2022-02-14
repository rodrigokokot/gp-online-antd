import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

const BreadcrumComponent = ({ props }) => {
  const location = useLocation();
  const arrayLocation = location.pathname.split("/");
  arrayLocation.shift();
  let direction = "";

  return (
    arrayLocation.length > 1 && (
      <Breadcrumb separator=">">
        {arrayLocation.map((element, index) => {
          direction = `${direction}` + `/${element}`;

          return index !== 0 ? (
            <Breadcrumb.Item
              // href={`http://localhost:3000${direction}`}
              key={index}
            >
              <Link to={direction}>
                {element.charAt(0).toUpperCase() +
                  element
                    .replace(/[^a-zA-Z]+/g, "")
                    .slice(1)
                    .split(/(?=[A-Z])/)
                    .join(" ")}
              </Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={index}>
              {element.charAt(0).toUpperCase() +
                element
                  .slice(1)
                  .split(/(?=[A-Z])/)
                  .join(" ")}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    )
  );
};

BreadcrumComponent.propTypes = {};

export default BreadcrumComponent;
