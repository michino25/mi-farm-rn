import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.products;
export const selectSearch = (state) => state.search;
export const selectCarts = (state) => state.carts;
export const selectCategories = (state) => state.categories;
export const selectUserInfo = (state) => state.users.user;
export const selectUserStatus = (state) => state.users.status;

export const selectProductById = (id) =>
  createSelector([selectProducts], (products) =>
    products.find((product) => product._id === id)
  );

export const selectCategoryByCode = (code) =>
  createSelector([selectCategories], (categories) =>
    categories.find((category) => category.code === code)
  );
