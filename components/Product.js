const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.producer}</li> // optional
          <li>{this.props.hasWatermark}</li> // boolean — optional, defaults: false
          <li>{this.props.name}</li> // string
          <li>{this.props.color}</li> // 'white', 'eggshell-white' or 'salmon'
          <li>{this.props.weight}</li> // ranges between 80 and 300
          // we'll need custom logic. write custom prop validator function
        </ul>
      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, weightElement) {
    if (props[weightElement] === undefined) {
      return new Error ('You must enter a weight')
    } else if (isNaN(props[weightElement])) {
      return new Error ('Weight must be a Number')
    } else if (props[weightElement] < 80 || props[weightElement] > 300) {
      return new Error ("Weight must be between 80 and 300")
    }
  }
};


Product.defaultProps = {
  hasWatermark: false
};

module.exports = Product;
