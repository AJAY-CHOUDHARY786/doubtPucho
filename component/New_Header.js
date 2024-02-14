import Link from 'next/link'
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import styles from "../style/Header.module.css";

const New_Header = () => {
  const [isListVisible, setListVisible] = useState(false);
  const router=useRouter()

  const handleLogout=()=>{
    localStorage.removeItem("stu");
    window.location.reload()
    router.push('/');
  }
  
  const [subToggle, setSubToggle] = useState(true)
  const handleListClick = () => {
    setListVisible(!isListVisible);    
  };

  const handleTransitionClick = () => {
    setSubToggle(!subToggle); 
  };

  



 
  return (
    <header className={styles.header}>
    <div className={styles.hamburgerIcon}>
      <div className={styles.hamburgerIconMenu}>
        <div className="icon">
          {" "}
          <img
            src="/hamburger.png"
            alt="ham" style={{width:'20px'}}
            onClick={handleListClick}
            className={isListVisible ? styles.imageSubList : ""}
          />
        </div>
        {isListVisible && (
          <div className={styles.imageList}>
            <div className={styles.imageSubList}>
              <div class={styles.mainmenucloseiconright}>
                <div className="leftImg">
                  <img
                    src="https://www.pw.live//version14/assets/img/user-mobile.svg"
                    alt=""
                  />
                  {/* <span class="caption-3 mob-call-us ms-2">
                    <a href="tel:8306056876">Call Us +918306056876</a>
                  </span> */}
                </div>
                <div className={styles.rightImg}>
                <span style={{  float: "right" }}
                            onClick={handleListClick}
                            className={isListVisible ? styles.clickedImage : ""}><img  src="/close.png" alt="close" style={{width:'14px'}}/></span>
                          
                </div>
              </div>
            
            </div>
          </div>
        )}
        <div className="logoimg">
          {" "}
          <Link href="/">
            <img
              className={styles.logo}
              src="/DOUBTPUCHO LOGO 1 (3).png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.menuContainer}>
      <nav className={styles.navMenu}>
        <ul className={styles.headersList}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <img
                className={styles.logo}
                src="/DOUBTPUCHO LOGO 1 (3).png"
                alt="logo"
              />
            </Link>
          </div>
       
         
       
        </ul>
      </nav>
    </div>
    
    <div className={styles.authContainer}>
    {/* <span className="call-us-hyperlink">
    <a href="tel:8306056876">Call Us +918306056876</a>
    </span> */}
      <Link href='#' className="btn  login-btn" >
          Login/Register
        </Link>
       <button onClick={handleLogout} className="btn  login-btn " >
          Logout
        </button>
    </div>
  </header>
  )
}

export default New_Header