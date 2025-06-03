export default function Filter({ setFilterCriteria }) {
  const handleChange = (e) => {
    setFilterCriteria((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="mt-10 flex  justify-center">
      <div className=" flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0  w-full max-w-3xl">
        <input
          type="search"
          name="searchTerm"
          placeholder="Search..."
          className="border  py-2 px-3  w-full max-w-72 rounded-md"
          onChange={handleChange}
        />

        <div>
          <label htmlFor="gender"> </label>
          <select
            name="gender"
            id="gender"
            className="border py-2 pe-20 rounded-md"
            onChange={handleChange}
          >
            |<option value="">Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
      </div>
    </section>
  );
}
