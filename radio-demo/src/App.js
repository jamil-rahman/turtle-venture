import styles from './App.module.css';
import PropTypes from 'prop-types'
import Radioplayer from './views/RadioPlayer/Radioplayer';

function App({name}) {
  return (
    <div className={styles.appHeader}>
    <Radioplayer />
    </div>
  );
}

App.propTypes={
  name: PropTypes.string
}

export default App;
