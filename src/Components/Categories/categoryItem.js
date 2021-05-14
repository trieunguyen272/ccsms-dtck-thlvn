import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";

CategoryItem.propTypes = {
  category: PropTypes.object,
  handleToProductClick: PropTypes.func,
};

CategoryItem.defaultProps = {
  category: {},
  handleToProductClick: null,
};

function CategoryItem(props) {
  const { category, onToProductClick } = props;

  const handleToProductClick = () => {
    if (onToProductClick) {
      onToProductClick(category);
    }
  };

  return (
    <div>
      <NavDropdown.Item
        key={category.id}
        name="name"
        onClick={handleToProductClick}
      >
        {category.name}
      </NavDropdown.Item>
    </div>
  );
}

export default CategoryItem;
