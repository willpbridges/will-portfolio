/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'
/* App imports */
import style from './article-heading.module.less'

const ArticleHeading = ({ excerpt, date, time, translations }) => (
  <div className={style.container}>
    <div className={style.excerpt}>
      <p>{excerpt}</p>
    </div>
  </div>
)

ArticleHeading.propTypes = {
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      hreflang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

// Languages code ISO 639-1 map
const hreflangMap = {
  en: 'English',
  it: 'Italian',
  fr: 'French',
}

export default ArticleHeading
