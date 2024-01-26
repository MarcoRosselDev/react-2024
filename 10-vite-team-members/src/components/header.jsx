export default function Header({proyecto}) {

  console.log(proyecto);
  return (
    <label>
      Pick a proyect:
      <select name="selectedFruit">
        <option value="proyecto-1" onSelect={() => proyecto('proyecto-1')}>Proyecto 1</option>
        <option value="proyecto-1" onSelect={() => proyecto('proyecto-2')}>Proyecto 2</option>
        <option value="proyecto-1" onSelect={() => proyecto('proyecto-3')}>Proyecto 3</option>
      </select>
    </label>
  );
}