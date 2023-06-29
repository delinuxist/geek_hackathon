import styles from './form.module.css'

type inputProps = {
    placeholder?: string,
    width?: string,
    scheme?: string
}

export default function InputField(props:inputProps) {
    
    
  return (
    <>
        <input 
        className={`${styles.ttInputField} ${props.scheme=="dark"? styles.ttInputFieldDark: styles.ttInputFieldDefault} h-10`}
        placeholder={props.placeholder}
        />
    </>
  )
}
