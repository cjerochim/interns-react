import React from "react";

class Textbox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });

  }
  onClick(e){
    e.preventDefault();
    const { value } = this.state;
    const { onAdd } = this.props;
    onAdd(value);
    this.setState({ value: '' });

  }

  render() {
    const { value } = this.state;
    return (
      <section>
        <form onSubmit={this.onClick} >
        <input
          value={value}
          type="text"
          onChange={this.onChange}
        />
        <button>add</button>
        </form>
      </section>
    );
  };
}
export default Textbox