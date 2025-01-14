
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../redux/slices/itemsSlice"; 

function CategoryPage({ match }) {
  const dispatch = useDispatch();
  const filteredItems = useSelector(state => state.items.filteredItems); 

  useEffect(() => {
    const category = match.params.category; 
    dispatch(filterByCategory(category)); 
  }, [dispatch, match.params.category]);

  return (
    <div>
      <h1>{match.params.category} Kategorisi</h1>
      {filteredItems.length === 0 ? (
        <p>Bu kategoride ürün bulunmamaktadır.</p>
      ) : (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price} TL</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryPage;
