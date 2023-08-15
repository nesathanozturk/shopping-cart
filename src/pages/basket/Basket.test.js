import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Basket from "./index";

import { basketActions } from "../../store/slices/basketSlice";

import { store } from "../../store/index";

describe("Basket component", () => {
  const mockProduct = {
    id: 1,
    title: "Red Lipstick",
    image:
      "https://www.esteelauder.com/media/export/cms/products/640x600/el_sku_WWRP_640x600_0.jpg",
    price: 20,
    amount: 1,
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Basket />
        </Provider>
      </MemoryRouter>
    );
  });

  it("should noItemText render when basket is empty", () => {
    const noItemText = screen.getByText("There is nothing in your basket!");

    expect(noItemText).toBeInTheDocument();
  });

  it("shouldn't render an item when basket is empty", () => {
    const basketItemCard = screen.queryByTestId("basket-card");

    expect(basketItemCard).not.toBeInTheDocument();
  });

  it("shouldn't render clear all button when basket is empty", () => {
    const clearAllButton = screen.queryByTestId("clear-all-button");

    expect(clearAllButton).not.toBeInTheDocument();
  });

  it("shouldn't render total amount of items in basket when basket is empty", () => {
    const totalAmount = screen.queryByTestId("total-amount");

    expect(totalAmount).not.toBeInTheDocument();
  });

  it("should render basket item when added an item in basket", async () => {
    await act(async () => {
      store.dispatch(basketActions.addToBasket(mockProduct));
    });

    let state = store.getState().basket.basketItems;
    expect(state).toHaveLength(1);

    const itemTitle = screen.getByText("Red Lipstick");
    expect(itemTitle).toBeInTheDocument();

    const noItem = screen.queryByText("There is nothing in your basket!");
    expect(noItem).not.toBeInTheDocument();
  });

  it("should clear all items when clicked on clear all button", async () => {
    await act(async () => {
      store.dispatch(basketActions.addToBasket(mockProduct));
    });

    const state = store.getState().basket.basketItems;
    expect(state).toHaveLength(1);

    await act(async () => {
      store.dispatch(
        basketActions.clearBasket({
          id: 1,
        })
      );
    });

    const updatedState = store.getState().basket.basketItems;
    expect(updatedState).toHaveLength(0);
  });

  it("should render total amount of items in basket when added an item in basket", async () => {
    const totalAmount = screen.queryByTestId("total-amount"); // => at the beginning it will be null or undefined because there is no total amount at the beginning.
    expect(totalAmount).not.toBeInTheDocument();

    await act(async () => {
      store.dispatch(basketActions.addToBasket(mockProduct));
    });

    const updatedTotalAmount = screen.queryByTestId("total-amount");
    expect(updatedTotalAmount).toBeInTheDocument();
  });
});
