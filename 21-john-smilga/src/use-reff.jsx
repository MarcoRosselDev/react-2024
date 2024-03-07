import { useRef } from "react"

export default function App() {
  const div_ref = useRef(null)
  const input_ref = useRef(null)

  function send_info() {
    console.log(input_ref.current.value);
  }

  function print_div() {
    div_ref.current.innerHTML = `<p>${input_ref.current.value}</p>`
  }

  return (
    <div>
      <input type="text" ref={input_ref} onChange={print_div}/>
      <button onClick={send_info}>print</button>
      <div ref={div_ref}></div>
    </div>
  )
}