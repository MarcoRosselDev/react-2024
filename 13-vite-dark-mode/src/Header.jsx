export default function Header(params) {

  //onst style = {backgroudColor='red'}

  const style = params.darkValue === true? {backgroudColor:'red'}: {backgroudColor:'green'}

  const div_style = params.darkValue? {backgroundColor: 'red'} : {backgroundColor: 'green'}

  return (
    <nav 
    className="header-nav"
    style={div_style}
    >
      <h1>header</h1>
      <button onClick={params.func}>{params.darkValue === true? "light mode" : 'dark mode'}</button>
    </nav>
  )
}