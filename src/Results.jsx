const results = ({ state }) => {
  return (
    <section className="results-section">
      <p>
        <strong>Font Family:</strong> {state.fontFamily}
      </p>
      <p>
        <strong>Size:</strong> {state.size} {state.sizeUnit}
      </p>
      <p>
        <strong>Weight:</strong> {state.weight}
      </p>
      <p>
        <strong>Transform:</strong> {state.transform}
      </p>
      <p>
        <strong>Style:</strong> {state.style}
      </p>
      <p>
        <strong>Decoration:</strong> {state.decoration}
      </p>
      <p>
        <strong>Line-Height:</strong> {state.lineHeight} {state.lineHeightUnit}
      </p>
      <p>
        <strong>Letter Spacing:</strong> {state.letterSpaceing}{" "}
        {state.letterSpaceingUnit}
      </p>
      <p>
        <strong>Word Spacing:</strong> {state.wordSpacing}{" "}
        {state.wordSpacingUnit}
      </p>
    </section>
  );
};

export default results;
