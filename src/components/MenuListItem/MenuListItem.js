import React from 'react';
import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  const handleButtonClick = () => {
    handleAddToOrder(menuItem._id);
  };

  return (
    <div className={`${styles.MenuListItem} ${menuItem.added ? styles.addedItem : ''}`}>
      <div className={`${styles.emoji} flex-ctr-ctr`}>{menuItem.emoji}</div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.description}>{menuItem.description}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        {menuItem.added ? (
          <button className={`${styles.addedButton} btn-sm`} disabled>
            ADDED
          </button>
        ) : (
          <button className="btn-sm" onClick={handleButtonClick}>
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
