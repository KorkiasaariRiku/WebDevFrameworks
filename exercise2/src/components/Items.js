import React from "react";
import styles from './Item.module.css';
import cx from 'classnames';

/* Shopping list item */
const Items = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <div className={ cx(styles.flex, styles.itemQtyUnit) }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
  </li>
}

export default Items;