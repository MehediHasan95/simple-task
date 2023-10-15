const results = ({ state }) => {
  return (
    <section className="results-section">
      <div>
        <p>
          <strong>Font Family</strong>
        </p>
        <p>
          <strong>Size</strong>
        </p>
        <p>
          <strong>Weight</strong>
        </p>
        <p>
          <strong>Transform</strong>
        </p>
        <p>
          <strong>Style</strong>
        </p>
        <p>
          <strong>Decoration</strong>
        </p>
        <p>
          <strong>Line-Height</strong>
        </p>
        <p>
          <strong>Letter Spacing</strong>
        </p>
        <p>
          <strong>Word Spacing</strong>
        </p>
      </div>

      <div>
        <p>
          <strong>:</strong> {state.fontFamily}
        </p>
        <p>
          <strong>:</strong> {state.size} {state.sizeUnit}
        </p>
        <p>
          <strong>:</strong> {state.weight}
        </p>
        <p>
          <strong>:</strong> {state.transform}
        </p>
        <p>
          <strong>:</strong> {state.style}
        </p>
        <p>
          <strong>:</strong> {state.decoration}
        </p>
        <p>
          <strong>:</strong> {state.lineHeight} {state.lineHeightUnit}
        </p>
        <p>
          <strong>:</strong> {state.letterSpaceing} {state.letterSpaceingUnit}
        </p>
        <p>
          <strong>:</strong> {state.wordSpacing} {state.wordSpacingUnit}
        </p>
      </div>
    </section>
  );
};

export default results;
