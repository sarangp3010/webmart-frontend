import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError?: boolean;
  error?: Error | null;
  errorInfo?: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="app">
          <div className="app-container">
            <div className="container">
              <div className="page-header mb-3">
                <h1 style={{ color: "red", marginLeft: "-30px" }}>
                  The below error occurred:
                </h1>
              </div>
              <div className="card border-none">
                <div className="card-body">
                  <p>
                    <strong style={{ color: "red" }}>Error Details:</strong>
                  </p>
                  {error ? (
                    <div>
                      <pre style={{ color: "red" }}>
                        <code>
                          {error.toString() || "Something went wrong!"}
                        </code>
                      </pre>
                    </div>
                  ) : null}
                  {errorInfo && errorInfo.componentStack ? (
                    <div>
                      <pre style={{ color: "red" }}>
                        <code>{errorInfo && errorInfo.componentStack}</code>
                      </pre>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
