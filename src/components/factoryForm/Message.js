import React from 'react'

import styles from './Message.module.scss';

const Message = ({ message }) => {
  return (
  <p className={styles.alert}>{message}</p>
  )
}

export default Message;
