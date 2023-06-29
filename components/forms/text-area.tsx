import styles from "../../styles/form.module.css"
type inputProps = {
    placeholder?: string,
    width?: string,
    scheme?: string
}

export default function TextField(props: inputProps) {
  return (
    <textarea className={`${styles.ttInputField} ${props.scheme=="dark"? styles.ttInputFieldDark: styles.ttInputFieldDefault} h-40`}
    placeholder={props.placeholder} />
  )
}
