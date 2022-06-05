import styles from './App.module.css';
import PropTypes from 'prop-types'

function App({name}) {
  return (
    <div className={styles.App}>
    <h1>Hi, mom</h1>
    <p className={styles.test}>This is a {name} for modules and proptypes</p>
    </div>
  );
}

App.propTypes={
  name: PropTypes.string
}

export default App;
