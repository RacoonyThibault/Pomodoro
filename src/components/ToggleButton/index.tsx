import play from "../../assets/play.svg";
import reset from "../../assets/reset.svg";
import { useSelector, useDispatch } from "react-redux";
import { startChrono, resetChrono } from "../../features/chrono";
import { RootState, AppDispatch } from "../../store"; // Typage du store

export default function ToggleButton() {
  const dispatch = useDispatch<AppDispatch>(); // Typage du dispatch avec AppDispatch
  const chronoValues = useSelector((state: RootState) => state.chrono); // Typage de l'état chrono

  function toggleChrono() {
    if (!chronoValues.isPlaying) {
      dispatch(startChrono());
    } else {
      dispatch(resetChrono());
    }
  }

  return (
    <button
      onClick={toggleChrono}
      className="px-4 py-2 text-slate-800 flex justify-center items-center mx-auto bg-slate-300 hover:bg-slate-200"
    >
      <span className="mr-3 text-lg">
        {chronoValues.isPlaying ? "reset" : "start"}
      </span>
      <img className="w-5" src={chronoValues.isPlaying ? reset : play} alt="" />
    </button>
  );
}
