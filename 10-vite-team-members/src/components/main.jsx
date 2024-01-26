export default function main({main_state}) {

  if (main_state === 'item-1') {
    return (
      <main>
        <p>main form components item 1</p>
        <p>main form components item 1</p>
        <p>main form components item 1</p>
        <p>main form components item 1</p>
        <p>main form components item 1</p>
      </main>
    )
  } else if (main_state === 'item-2') {
    return (
      <main>
        <p>main form components item 2</p>
        <p>main form components item 2</p>
        <p>main form components item 2</p>
      </main>
    )
  } else if (main_state === 'item-3') {
    return (
      <main>
        <p>main form components item 3</p>
        <p>main form components item 3</p>
      </main>
    )
  }
}