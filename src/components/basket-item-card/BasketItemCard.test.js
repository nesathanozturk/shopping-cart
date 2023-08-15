import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import BasketItemCard from "./index";

import { store } from "../../store/index";

describe("BasketItemCard", () => {
  const initialState = {
    basket: {
      basketItems: [
        {
          id: 1,
          title: "Red Lipstick",
          image:
            "https://www.esteelauder.com/media/export/cms/products/640x600/el_sku_WWRP_640x600_0.jpg",
          price: 20,
          amount: 1,
        },
      ],
    },
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BasketItemCard basketProducts={initialState.basket.basketItems} />
      </Provider>
    );
  });

  it("should render the basket card", () => {
    const basketCard = screen.getByTestId("basket-card");

    expect(basketCard).toBeInTheDocument();
  });

  it("should render the basket card with the corrent title", () => {
    const productTitle = screen.getByText("Red Lipstick");

    expect(productTitle).toBeInTheDocument();
  });

  it("should render the basket card with the correct price", () => {
    const productPrice = screen.getByText("$20");

    expect(productPrice).toBeInTheDocument();
  });

  it("should render the basket card with the correct amount", () => {
    const productAmount = screen.getByText("1");

    expect(productAmount).toBeInTheDocument();
  });

  it("should render the basket card with the correct image", () => {
    const productImage = screen.getByAltText("Red Lipstick");

    expect(productImage).toBeInTheDocument();

    expect(productImage).toHaveAttribute(
      "src",
      "https://www.esteelauder.com/media/export/cms/products/640x600/el_sku_WWRP_640x600_0.jpg"
    );
  });

  it("should render increase button", async () => {
    const increaseButton = screen.getByTestId("increase-button");

    expect(increaseButton).toBeInTheDocument();
  });

  it("should render decrease button", async () => {
    const decreaseButton = screen.getByTestId("decrease-button");

    expect(decreaseButton).toBeInTheDocument();
  });

  it("should render remove button", async () => {
    const removeButton = screen.getByTestId("remove-button");

    expect(removeButton).toBeInTheDocument();
  });

  it("should remove the product from cart", async () => {
    const user = userEvent.setup();

    const removeButton = screen.getByTestId("remove-button");

    await user.click(removeButton);

    const updatedBasketProducts = store.getState().basket.basketItems;
    expect(updatedBasketProducts).toHaveLength(0);
  });
});
