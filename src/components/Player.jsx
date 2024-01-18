export default function Player({name, symbol}) {
  return (
    <>
      
          <li>
            <span className="Player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
          </li>
       <button>Edit</button>
    </>
  );
}
