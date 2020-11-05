import React from 'react'
import styles from './Button.module.scss'

export const Button = (props) => {

  const getClassesList = () => {
    let result = styles.default
    result = ((props.variant === 'outline') ? result + ` ${styles.outline}` : result)
    result = ((props.variant === 'text') ? result + ` ${styles.text}` : result)
    result = ((props.disableShadow) ? result + ` ${styles.disableShadow}` : result)
    result = ((props.disabled) ? result + ` ${styles.disabled}` : result)
    result = ((props.size === 'sm') ? result + ` ${styles.sizeSm}` : result)
    result = ((props.size === 'lg') ? result + ` ${styles.sizeLg}` : result)
    result = ((props.color === 'primary') ? result + ` ${styles.colorPrimary}` : result)
    result = ((props.color === 'secondary') ? result + ` ${styles.colorSecondary}` : result)
    result = ((props.color === 'danger') ? result + ` ${styles.colorDanger}` : result)

    return result
  }

  const getButtonText = () => (
    props.children ? props.children : 'Default'
  )

  const renderStartIcon = () => (
    props.startIcon && <i className={`material-icons ${styles.startIcon}`}>{props.startIcon}</i>
  )

  const renderEndIcon = () => (
    props.endIcon && <i className={`material-icons ${styles.endIcon}`}>{props.endIcon}</i>
  )

  
  return (
    <button
      autoFocus={props.autofocus}
      disabled={props.disabled}
      form={props.form}
      formAction={props.formaction}
      formMethod={props.formmethod}
      formNoValidate={props.formnovalidate}
      formTarget={props.formtarget}
      name={props.name}
      type={props.type}
      value={props.value}
      className={getClassesList()}
    >
      {renderStartIcon()}
      {getButtonText()}
      {renderEndIcon()}
    </button>
  )
}