import { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faDesktop,
  faPlus,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  DECORATION,
  FONT_FAMILY,
  LETTER_SPACING,
  LETTER_SPACING_UNIT,
  LINE_HEIGHT,
  LINE_HEIGHT_UNIT,
  SIZE,
  SIZE_UNIT,
  STYLE,
  TRANSFORM,
  WEIGHT,
  WORD_SPACING,
  WORD_SPACING_UNIT,
} from "./constant";
import Results from "./Results";

function App() {
  const initialState = {
    fontFamily: "",
    size: 0,
    sizeUnit: "px",
    weight: "",
    transform: "",
    style: "",
    decoration: "",
    lineHeight: 0,
    lineHeightUnit: "px",
    letterSpaceing: 0,
    letterSpaceingUnit: "px",
    wordSpacing: 0,
    wordSpacingUnit: "px",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case FONT_FAMILY:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case SIZE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WEIGHT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case TRANSFORM:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case STYLE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case DECORATION:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LINE_HEIGHT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LETTER_SPACING:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WORD_SPACING:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case SIZE_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LINE_HEIGHT_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LETTER_SPACING_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WORD_SPACING_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Results: ", state);

  return (
    <main>
      <section className="typography-body">
        <article className="head-section">
          <h3>Typegraphy</h3>
          <div>
            <button>
              <FontAwesomeIcon icon={faRotateLeft} />
            </button>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </article>

        <article className="main-section">
          <div className="select-section">
            <p>Family</p>
            <select
              name="fontFamily"
              onChange={(e) =>
                dispatch({
                  type: FONT_FAMILY,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Pick one
              </option>
              <option value="Roboto">Roboto</option>
              <option value="Poppins">Poppins</option>
              <option value="Lato">Lato</option>
            </select>
          </div>

          <div className="range-section">
            <div className="measurement-name">
              <p>
                <span>Size</span> <FontAwesomeIcon icon={faDesktop} />
              </p>
              <select
                name="sizeUnit"
                onChange={(e) =>
                  dispatch({
                    type: SIZE_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  Unit
                </option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement-unit">
              <input
                type="range"
                name="size"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: SIZE,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.size} />
            </div>
          </div>

          <div className="select-section">
            <p>Weight</p>
            <select
              name="weight"
              onChange={(e) =>
                dispatch({
                  type: WEIGHT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Pick one
              </option>
              <option value="Regular 400">Regular 400</option>
              <option value="Medium 500">Medium 500</option>
              <option value="SemiBold 600">SemiBold 600</option>
            </select>
          </div>

          <div className="select-section">
            <p>Transform</p>
            <select
              name="transform"
              onChange={(e) =>
                dispatch({
                  type: TRANSFORM,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="Rotate">Rotate</option>
              <option value="Scale">Scale</option>
              <option value="Skew">Skew</option>
            </select>
          </div>

          <div className="select-section">
            <p>Style</p>
            <select
              name="style"
              onChange={(e) =>
                dispatch({
                  type: STYLE,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Pick one
              </option>
              <option value="Inline">Inline</option>
              <option value="Internal">Internal</option>
              <option value="External">External</option>
            </select>
          </div>

          <div className="select-section">
            <p>Decoration</p>
            <select
              name="decoration"
              onChange={(e) =>
                dispatch({
                  type: DECORATION,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Pick one
              </option>
              <option value="Overline">Overline</option>
              <option value="Underline">Underline</option>
              <option value="Line Through">Line Through</option>
            </select>
          </div>

          <div className="range-section">
            <div className="measurement-name">
              <p>
                <span>Line-Height</span> <FontAwesomeIcon icon={faDesktop} />
              </p>
              <select
                name="lineHeightUnit"
                onChange={(e) =>
                  dispatch({
                    type: LINE_HEIGHT_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  Unit
                </option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement-unit">
              <input
                type="range"
                name="lineHeight"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: LINE_HEIGHT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.lineHeight} />
            </div>
          </div>

          <div className="range-section">
            <div className="measurement-name">
              <p>
                <span>Letter Spacing</span> <FontAwesomeIcon icon={faDesktop} />
              </p>
              <select
                name="letterSpacingUnit"
                onChange={(e) =>
                  dispatch({
                    type: LETTER_SPACING_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  Unit
                </option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement-unit">
              <input
                type="range"
                name="letterSpaceing"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: LETTER_SPACING,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.letterSpaceing} />
            </div>
          </div>

          <div className="range-section">
            <div className="measurement-name">
              <p>
                <span>Word Spacing</span> <FontAwesomeIcon icon={faDesktop} />
              </p>
              <select
                name="wordSpacingUnit"
                onChange={(e) =>
                  dispatch({
                    type: WORD_SPACING_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  Unit
                </option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement-unit">
              <input
                type="range"
                name="wordSpacing"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: WORD_SPACING,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.wordSpacing} />
            </div>
          </div>
        </article>
      </section>
      <Results state={state} />
    </main>
  );
}

export default App;
