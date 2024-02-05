export default function Header(params) {

  return (
    <nav className="header-nav">
      <h1>header</h1>
      <button onClick={params.func}>{params.darkValue === true? "light mode" : 'dark mode'}</button>
    </nav>
  )
}