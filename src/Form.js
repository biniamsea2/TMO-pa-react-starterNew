function Form({ handleChange, formInputData, handleSubmit }) {
  return (
    <form>
      <div>
        <label for="recipe-name">recipe-name </label>
        <input
          name="recipe-name"
          value={formInputData["recipe-name"]}
          type="text"
          onChange={handleChange}
          placeholder="recipe-name"
        />
      </div>
      <div>
        <label for="recipe-instructions">recipe-instructions </label>
        <input
          type="text"
          onChange={handleChange}
          value={formInputData["recipe-instructions"]}
          name="recipe-instructions"
          placeholder="recipe-instructions"
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}
export default Form;
