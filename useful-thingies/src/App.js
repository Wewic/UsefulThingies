import logo from './assets/bears.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-paragraph">
          Can't decide what to eat?
        </p>
      <Button role="button">Let's decide together!</Button>
      </header>
    </div>
  );
}

const Button = ({ as, children, filled, secondary, ...rest }) => {
  const that = {
    as
  }
  return (
    <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest} >
      {children}
      <span/>
      <span/>
      <span/>
      <span/>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </that.as>
  )
}
Button.defaultProps = {
  as: 'button'
}

export default App;
