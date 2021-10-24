import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api';
import { AuthContext } from '../../contexts/auth';



const LoginBox: React.FC = () => {

  const { signInUrl } = useContext(AuthContext)
  
    return (
     <div className={styles.LoginBoxWrapper}>
       <strong>Entre e compartilhe sua mensagem</strong>
       <a href={signInUrl} className={styles.signinWithGithub}>
           <VscGithubInverted size="24"/>
           Entrar com Github
       </a>
     </div>
    )
}

export default LoginBox;