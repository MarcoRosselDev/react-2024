import './App.css';
import start from './star.svg';
import start_yell from './star-yell.svg';

export default function App(params) {
  console.log(params);

  return (
    <div>
      <p>main</p>
      <img src={start} alt="empty star" />
      <img src={start_yell} alt="yellow star" />
    </div>
  )
}