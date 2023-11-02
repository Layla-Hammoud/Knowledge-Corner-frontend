import React from 'react';
import styles from './AdminNotFound.module.css';

function AdminNotFound() {
  return (
    <div className={styles.adminNotFound}>
      <div className={styles.errorMessage}>
        Oops, Admin Not Found!
      </div>
      <div className={styles.sadEmoji}>😞</div>
    </div>
  );
}

export default AdminNotFound;
