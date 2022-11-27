import { StepProps } from './Step.props'

import styles from './Step.module.scss'

const Step = ({step,text}:StepProps) => {
  return (
    <div className={styles.stepBlock}>
      <div className={styles.step}>
        {step}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}

export default Step