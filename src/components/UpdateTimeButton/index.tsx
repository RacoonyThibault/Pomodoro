import { useDispatch } from "react-redux";
import { updateChronoValues } from "../../features/chrono";
import { AppDispatch } from "../../store"; // Importer le typage de dispatch

interface UpdateTimeButtonProps {
  sign: "+" | "-"; // Typage strict pour sign
  type: "session" | "pause"; // Typage strict pour type
}

export default function UpdateTimeButton({
  sign,
  type,
}: UpdateTimeButtonProps) {
  const dispatch = useDispatch<AppDispatch>(); // Typage strict pour le dispatch

  function handleUpdate() {
    dispatch(updateChronoValues({ type, value: sign === "+" ? 60 : -60 }));
  }

  return (
    <button
      onClick={handleUpdate}
      className="w-8 h-8 bg-slate-100 text-slate-700 flex justify-center items-center rounded"
    >
      <span className="relative bottom-1 pointer-events-none">{sign}</span>
    </button>
  );
}
