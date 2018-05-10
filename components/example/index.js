import cowsay from 'cowsay-browser';
import styles from './styles.css';

export default ({ text }) => (
    <div>
        <pre className={styles.example}>
            {cowsay.say({ text: text || 'moo' })}
            <div style={{ backgroundColor: 'green', width: '100%', height: '20px'}} />
        </pre>
    </div>
);