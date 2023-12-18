import { useState, useRef} from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  const onClickSubmitted = () => {
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = '';
  };



  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity!"}</h2>
      <p>
        <input type="text" ref={playerNameRef}/>
        <button onClick={onClickSubmitted} >Set Name</button>
      </p>
    </section>
  );
}
