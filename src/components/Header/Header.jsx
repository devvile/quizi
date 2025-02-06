import styles from './Header.module.scss';
import logoImg from '../../assets/quiz-logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg}/>
      <h1 className={styles.heading}>React Quiz</h1>
    </header>
  );
}