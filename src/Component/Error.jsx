import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // 在这里记录错误信息
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // 渲染备用UI
      return <div>Oops! 出现了一些问题，请稍后再试。</div>;
    }
    // 正常渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;
