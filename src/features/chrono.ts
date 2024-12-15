import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store"; // Adjust the path as necessary

// Typage des états internes
interface TimerState {
  value: number;
  runningValue: number;
}

interface DisplayedValue {
  display: number;
  heading: "Work" | "Pause";
}

// Typage de l'état global du slice
interface ChronoState {
  session: TimerState;
  pause: TimerState;
  isPlaying: boolean;
  intervalID: number | undefined;
  cycles: number;
  displayedValue: DisplayedValue;
}

// État initial avec le typage
const initialState: ChronoState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    display: 1500,
    heading: "Work",
  },
};

// Typage des payloads pour les reducers
interface UpdateChronoPayload {
  type: "session" | "pause";
  value: number;
}

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateChronoValues: (state, action: PayloadAction<UpdateChronoPayload>) => {
      const chosenState = state[action.payload.type];
      if (chosenState.value + action.payload.value <= 0) return;

      chosenState.value += action.payload.value;

      if (action.payload.type === "session") {
        if (!state.isPlaying) {
          chosenState.runningValue += action.payload.value;
          state.displayedValue.display = chosenState.value;
        }
      } else if (action.payload.type === "pause") {
        chosenState.runningValue = chosenState.value;
      }
    },
    tick: (state) => {
      if (state.session.runningValue > 0) {
        state.session.runningValue--;
        state.displayedValue.display = state.session.runningValue;
        state.displayedValue.heading = "Work";
      } else if (state.pause.runningValue > 0) {
        state.pause.runningValue--;
        state.displayedValue.display = state.pause.runningValue;
        state.displayedValue.heading = "Pause";
      } else {
        state.cycles++;
        state.session.runningValue = state.session.value - 1;
        state.displayedValue.display = state.session.value - 1;
        state.displayedValue.heading = "Work";
        state.pause.runningValue = state.pause.value;
      }
    },
    setUpChrono: (state, action: PayloadAction<number>) => {
      state.isPlaying = true;
      state.intervalID = action.payload;
    },
    resetChrono: (state) => {
      if (state.intervalID !== undefined) {
        window.clearInterval(state.intervalID);
      }
      state.isPlaying = false;
      state.session.runningValue = state.session.value;
      state.pause.runningValue = state.pause.value;
      state.displayedValue.display = state.session.value;
      state.cycles = 0;
    },
  },
});

// Fonction asynchrone pour démarrer le chrono
export function startChrono() {
  return (dispatch: AppDispatch) => {
    const intervalId = window.setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(setUpChrono(intervalId));
    dispatch(tick());
  };
}

// Export des actions et du reducer
export const { updateChronoValues, resetChrono, setUpChrono, tick } =
  chrono.actions;
export default chrono.reducer;
