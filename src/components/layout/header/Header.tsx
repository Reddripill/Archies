"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Home, Menu } from "lucide-react";

const Header = () => {
   const [isShow, setIsShow] = useState(false);
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles["header-container"]}>
                  <Link href="/" className="inline-flex items-end gap-x-1">
                     <Home strokeWidth={2} className="size-5 max-md:size-4" />
                     <span className="font-bold text-base max-md:text-sm !leading-none">
                        Archies
                     </span>
                  </Link>
                  <div
                     className={cn(styles["menu-wrapper"], {
                        [styles._show]: isShow,
                     })}
                  >
                     <menu className={styles.menu}>
                        <nav className={styles.nav}>
                           <Link href="/" className={styles.item}>
                              Home
                           </Link>
                           <Link href="/" className={styles.item}>
                              About
                           </Link>
                           <Link href="/" className={styles.item}>
                              Services
                           </Link>
                           <Link href="/" className={styles.item}>
                              Project
                           </Link>
                           <Link href="/" className={styles.item}>
                              Blog
                           </Link>
                           <Link href="/" className={styles.item}>
                              Contact
                           </Link>
                        </nav>
                     </menu>
                     <div
                        className={styles.burger}
                        onClick={() => setIsShow(!isShow)}
                     >
                        <Menu size={20} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
