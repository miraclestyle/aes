const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const style = require('styled-components').default;

const Title = style.h1`
  color: #000000;
`;

function App(props) {
  const { name } = props;
  const msg = `Hello, ${name}!`;
  return (
    <Title>
      {msg}
    </Title>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

const root = document.getElementById('app');
ReactDOM.render(<App name="World" />, root);
