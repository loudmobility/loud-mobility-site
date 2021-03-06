import React from 'react'
import * as classes from './index.module.less'
import checkp from 'images/checkp.svg'
import checkw from 'images/checkw.svg'
import { Link } from 'gatsby'

export default ({ label, extra, price, dark, list, link, onBook }) => {
  return (
    <div className={[classes.container, dark ? classes.dark : ''].join(' ')}>
      <label>{label}</label>
      <div className={classes.pricing}>
        £{price}
        {extra ? <span className={classes.extra}>{extra}</span> : null}
      </div>
      <ul>
        {list.map((it) => (
          <li>
            <span>
              <img src={dark ? checkw : checkp} alt="Checkmark" />
            </span>
            <p>{it}</p>
          </li>
        ))}
      </ul>
      <Link className={classes.learnMore} to={link}>
        Learn more...
      </Link>
      <button onClick={() => !!onBook && onBook(label)}>Book Now</button>
    </div>
  )
}
