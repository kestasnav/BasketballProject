import React from 'react';
import Link from 'next/link';

import Search from './Search'

import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GiBasketballBasket } from 'react-icons/gi';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
        <div className='navIcons'>
      <Link href="/">
        <a style={{display : "flex", alignItems: "center", color: 'black', marginBottom:'0px'}}>
          <GiBasketballBasket size="3rem"/> <span className="span">BasketBall Project</span>
        </a>
      </Link>
    </div>
    <div className='navbarLinks'>
      <li>
        <Link href="/Naujienos">
          <div className='navText'>Naujienos</div>
        </Link>
      </li>
      <li>
        <Link href="/Tvarkaraštis">
        <div className='navText'>Tvarkaraštis</div>
        </Link>
      </li>
      <li>
        <Link href="/Rezultatai">
        <div className='navText'>Rezultatai</div>
        </Link>
      </li>
      <li>
        <Link href="/TurnyrineLentele">
        <div className='navText'>Turnyrinė lentelė</div>
        </Link>
      </li>
      <li>
        <Link href="/Kita">
        <div className='navText'>Kita</div>
        </Link>
      </li>
      <li className="button">
        <Link href="/Registracija">
        <div className='navReg'>Registruotis</div>
        </Link>
      </li>
      <li>
        <Link href="/sign-in">
        <div className={styles.button}>Prisijungti</div>
        </Link>
      </li>
    </div>
    <div className='socialIcons'>
    <div className="search">
    <Search />

    </div>

      <a href="https://instagram.com">
        <AiFillInstagram size="2rem" />
      </a>
      <a href="https://facebook.com">
        <AiFillFacebook size="2rem" />
      </a>
      <a href="https://youtube.com">
        <AiFillYoutube size="2rem" />
      </a>
    </div>
    </div>
  )
}

export default Header
