import { useState } from 'react'
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const button = (index) => {
    setActiveIndex(index)
  };
  const forwardButton = () => {
      setActiveIndex(activeIndex + 1)
  };

  const backButton = () => {
    setActiveIndex(activeIndex - 1)
  };

  const startOver = () => {
    setActiveIndex(0)
  };
  
  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles.stepsContent}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles.stepsList}>
            {steps.map((item, index) => (
              <li className={`${styles.stepsItem} ${index === activeIndex ? styles.stepsItemActive : styles.stepsItem} ${index < activeIndex ? styles.stepsItemDone : styles.stepsItem}`} key={item.id}>
                <button className={styles.stepsItemButton} onClick={() => button(index)}>{item.id.slice(2)}</button>
                {item.title}
              </li>
            ))}
          </ul>
          <div className={styles.buttonsContainer}>
            <button className={styles.button} onClick={backButton} disabled={isFirstStep}>Назад</button>
            {isLastStep ? <button className={styles.button} onClick={startOver}>
              Начать сначала
            </button> : <button className={styles.button} onClick={forwardButton}>
              Далее
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};
