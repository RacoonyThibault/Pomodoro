import UpdateTimeButton from "./components/UpdateTimeButton";
import ToggleButton from "./components/ToggleButton";
import { useSelector } from "react-redux";
import { getFormatedValue } from "./utils/getFormatedValue";

function App() {
  interface RootState {
    chrono: {
      session: { value: number };
      pause: { value: number };
      displayedValue: { heading: string; display: number };
      cycles: number;
    };
  }

  const chronoValues = useSelector((state: RootState) => state.chrono);
  return (
    <div className="bg-pomodoro-bg bg-cover text-white shadow-lg text-g pt-20 w-full min-h-screen">
      <div
        className="max-w-xl mx-auto 
       border-slate-500 p-10 bg-black/50 text-white px-4 py-2 rounded text-lg"
      >
        <h1 className="text-center mb-8 text-3xl">Pomodoro App</h1>
        <div className="flex justify-center mb-8">
          <div className="mr-10">
            <p className="text-center mb-1">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>

        <p className="text-center mb-2 text-xl font-semi-bold">
          {chronoValues.displayedValue.heading}
        </p>
        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            {getFormatedValue(chronoValues.displayedValue.display)}
          </span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-5 text-center">
            Passed cycle(s) : {chronoValues.cycles}
          </p>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

export default App;
