export const filterByCategory = (category) => {
    return {
      type: "FILTER_BY_CATEGORY",
      payload: category,
    };
  };
  