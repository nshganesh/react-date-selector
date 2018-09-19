import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class SimpleDateSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentValue: props.value.format(props.format),
    }
  }

  onDateChange = (e) => {
    let currentValue = dayjs(e.target.value).format(this.props.format)
    this.setState({ currentValue }, () => this.props.onChange(currentValue));
  }

  render() {

    const { disabled, } = this.props;
    const { currentValue } = this.state;
    return (
      <input 
        type="date"
        disabled={disabled}
        value={currentValue}
        onChange={(e) => this.onDateChange(e)}
      />
    );
  }
}

SimpleDateSelector.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.object,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SimpleDateSelector.defaultProps = {
  disabled: false,
  value: dayjs(),
  format: "YYYY-MM-DD",
};


export default SimpleDateSelector;