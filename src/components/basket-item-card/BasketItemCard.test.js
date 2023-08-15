import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import BasketItemCard from "./index";

import { store } from "../../store/index";

describe("BasketItemCard", () => {
  const basketProducts = [
    {
      id: 1,
      title: "Red Lipstick",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 20,
      amount: 1,
    },
  ];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BasketItemCard basketProducts={basketProducts} />
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
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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

  it("should remove the product from the basket", async () => {
    const removeButton = screen.getByTestId("remove-button");

    userEvent.click(removeButton);

    const state = store.getState().basket.basketItems;

    expect(state).toHaveLength(0);
  });
});
