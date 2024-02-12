import styles from './ContainerNoPadding.module.css';

const ContainerNoPadding = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ContainerNoPadding;
