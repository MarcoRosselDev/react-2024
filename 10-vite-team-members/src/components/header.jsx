export default function Header({proyecto}) {

  let proy = '';
  console.log(proyecto);
  //console.log(select);
  return (
    <label>
      Pick a proyect:
      
      <select name="selectedFruit" onChange={() => {
        proyecto()
      }}>
        <option value="proyecto-1" >Proyecto 1</option>
        <option value="proyecto-2" >Proyecto 2</option>
        <option value="proyecto-3" >Proyecto 3</option>
      </select>
    </label>
  );
}