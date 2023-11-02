import React from 'react';
import styles from './WebsiteNotFound.module.css';

function WebsiteNotFound() {
  return (
    <div className={styles.websiteNotFound}>
      <div className={styles.errorMessage}>
        Oops, Website Not Found!
      </div>
      <div className={styles.sadEmoji}>😞</div>
    </div>
  );
}

export default WebsiteNotFound;
