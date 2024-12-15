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
    <div className="bg-slate-700 text-slate-100 pt-20 w-full min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
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
        <p className="mb-10 text-center">
          Passed cycle(s) : {chronoValues.cycles}
        </p>

        <ToggleButton />
      </div>
    </div>
  );
}

export default App;

//Explicite

//Implicite (à privilégier)

/** En typeScript lors de l'initialisation, on veut préciser 3 infos
 * (précédé d'un marqueur) :
 * 1)Le NOM de la variable précédé de CONST / LET (DEFINITION)
 * 2)Le TYPE de la variable précédé de ":" (TYPAGE)
 * 3)La VALEUR de la variable précédé de "=" (ASSIGNATION)
 */
