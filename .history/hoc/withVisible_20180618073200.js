import React from "react";

withToggle = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleVisible = this.onToggle.bind(this);
      this.state = { visible: false };
    }
    handleVisible() {
      this.setState({ visible: !this.state.toggled });
    }
    render() {
      return (
        <WrappedComponent
          handleVisible={this.handleVisible}
          visible={this.state.visible}
          {...this.props}
        />
      );
    }
  };
};
