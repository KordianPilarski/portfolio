import { useEffect, useRef } from "react";
import styles from './HeaderLogo.module.css'

const HeaderLogo = () => {
  const firstPathRef = useRef("");
  const secondPathRef = useRef("");


  useEffect(() => {
    const logo = [firstPathRef.current, secondPathRef.current]
    console.log(logo);

    for(let i = 0; i < logo.length; i++){
      console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
    }
  }, []);

  return (
    <svg
      className={styles["header-svg"]}
      width="198"
      height="146"
      viewBox="0 0 198 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={firstPathRef}
        d="M8.8 2.99999V143H2.8V2.99999H8.8ZM91 2.99999L23.8 69.8L97.4 143H88.8L15.2 69.8L82.4 2.99999H91Z"
        stroke="#0984E3"
        strokeWidth="3"
      />
      <path
        ref={secondPathRef}
        d="M167.048 75.8L164.048 70.6L175.248 64.2C184.448 59.1333 189.048 51.0667 189.048 40C189.048 19.3333 173.315 9 141.848 9H123.448V143H117.448V2.99999H141.848C159.448 2.99999 172.715 6.26666 181.648 12.8C190.582 19.2 195.048 28.2667 195.048 40C195.048 53.3333 189.448 63.1333 178.248 69.4L167.048 75.8Z"
        stroke="#0984E3"
        strokeWidth="3"
      />
    </svg>

    
    
  );
};

export default HeaderLogo;
