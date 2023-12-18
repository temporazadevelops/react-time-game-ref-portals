import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, handleResetTimeRemaining },
  ref,
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const frmtRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2> You Lost</h2>}
      {!userLost && <h2> Youre score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stop the timer with{" "}
        <strong>{frmtRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handleResetTimeRemaining}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default ResultModal;
