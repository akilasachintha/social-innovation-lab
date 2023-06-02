import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={`primary-pink-button-container ${props.rootClassName} `}>
      <button className="primary-pink-button-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryPinkButton
