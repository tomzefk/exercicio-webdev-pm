import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './Accordion.module.scss'

function AccordionItem({ title, component }) {

  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles["accordion-item"]}>
      <div className={styles["accordion-title"]} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {
          isActive
            ? <FiMinus />
            : <FiPlus />
        }
      </div>
      <div className={`${styles["accordion-content"]} ${!isActive ? styles.hidden : ""}`}>
        {component}
      </div>

    </div>
  );
};

export default AccordionItem;