import styles from './Button.module.css'

const Button = (props) => {
   return (
       <a href="#" className={`${styles.button} ${props.class}`}>{props.children}</a>
   ) 
}

export default Button;