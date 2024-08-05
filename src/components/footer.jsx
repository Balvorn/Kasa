import kasaWhiteLogo from './assets/logo.svg'

export default function Footer() {
    return (
        <>
      <footer>
        <img src={kasaWhiteLogo} className="logo" alt="Kasa logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
        </>
    )
}