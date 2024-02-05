export default function Header(params) {
  //const div_style = params.darkValue? {backgroundColor: 'red'} : {backgroundColor: 'green'}
  return (
    <nav 
    className={`header-nav ${params.darkValue? 'header-nav-dark': ''}`}
    >
      <h1>header</h1>
      <button onClick={params.func}>{params.darkValue ? "light mode" : 'dark mode'}</button>
    </nav>
  )
}