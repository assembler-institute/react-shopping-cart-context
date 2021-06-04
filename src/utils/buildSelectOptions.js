function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}

export default buildSelectOptions;
