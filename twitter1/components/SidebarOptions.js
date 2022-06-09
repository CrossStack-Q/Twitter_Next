import React from 'react'
import styles from '../styles/SidebarOption.module.css'

const SidebarOption = ({active ,text, Icon}) => {
  return (
    <div className={styles.sidebarOption}>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption