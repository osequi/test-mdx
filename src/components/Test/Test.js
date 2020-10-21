import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Test.md
 */
const Test = (props) => {
  return <div className="Test">Test, a React component</div>;
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
export { propTypes as TestPropTypes, defaultProps as TestDefaultProps };
