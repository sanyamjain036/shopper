import React from "react";

const Sidebar = ({ filter, setFilter }) => {
  function handleChange(e, filterProperty) {
    const filterPropertyValue = e.target.name;
    setFilter((prev) => {
      return {
        ...prev,
        [filterProperty]: {
          ...prev[filterProperty],
          [filterPropertyValue]: !prev[filterProperty][filterPropertyValue],
        },
      };
    });
  }

  return (
    <div className="p-6 flex bg-gray-50 flex-col gap-4">
      <div>
        <div>Colour</div>
        <ul className=" list-none">
          <li>
            <input
              type="checkbox"
              checked={filter.color.red}
              onChange={(e) => handleChange(e, "color")}
              id="input-red"
              name="red"
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-red">Red</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={filter.color.blue}
              onChange={(e) => handleChange(e, "color")}
              id="input-blue"
              name="blue"
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-blue">Blue</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={filter.color.green}
              onChange={(e) => handleChange(e, "color")}
              id="input-green"
              name="green"
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-green">Green</label>
          </li>
        </ul>
      </div>
      <div>
        <div>Gender</div>
        <ul className=" list-none">
          <li>
            <input
              type="checkbox"
              checked={filter.gender.men}
              id="input-men"
              name="men"
              className="w-4 h-4 mr-2"
              onChange={(e) => handleChange(e, "gender")}
              />
            <label htmlFor="input-men" name="men">
              Men
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={filter.gender.women}
              id="input-women"
              name="women"
              onChange={(e) => handleChange(e, "gender")}
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-women">Women</label>
          </li>
        </ul>
      </div>
      <div>
        <div>Price</div>
        <ul className=" list-none">
          <li>
            <input
              type="checkbox"
              checked={filter.price.lessThan250}
              id="input-lessThan250"
              name="lessThan250"
              onChange={(e) => handleChange(e, "price")}
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-lessThan250">0 - Rs250</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={filter.price.between251and450}
              id="input-between251and450"
              name="between251and450"
              onChange={(e) => handleChange(e, "price")}
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-between251and450">Rs251 - Rs450</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={filter.price.moreThan450}
              id="input-moreThan450"
              name="moreThan450"
              onChange={(e) => handleChange(e, "price")}
              className="w-4 h-4 mr-2"
              />
            <label htmlFor="input-moreThan450">More than Rs 450</label>
          </li>
        </ul>
      </div>
    
      <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
    </div>
  );
};

export default Sidebar;
