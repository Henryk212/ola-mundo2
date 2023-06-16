import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from './circulo_colorido.png'
import minhaFoto from './minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
            Olá, Mundo
        </h1>
        <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal! Eu sou Henrique Onorato, aluno de Front-end. Aqui compartilho os projetos desenvolvidos em aula, 
        espero que goste ^^
        </p>
      </div>  
      <div className={styles.imagens}>
        <img src={circuloColorido} alt="" className={styles.circuloColorido} area-hidden={true}/>
        <img className={styles.minhaFoto} alt='Foto Henrique Onorato'
            src={minhaFoto} 
        />
      </div>

    </div>
  )
}
