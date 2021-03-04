import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Todo from "../Todo.svelte";

test("show the heading of the component", () => {
   const { getByText } = render(Todo);
   expect(getByText("Todo App")).toBeInTheDocument();
});

test("first items is zero", () => {
   const { getByText } = render(Todo);
   expect(getByText("Items : 0")).toBeInTheDocument();
});

test("check the items when event is exist", async () => {
   const { container } = render(Todo);
   const itemsContainer = container.querySelector(".items");
   const form = container.querySelector("form");

   expect(itemsContainer.childElementCount).toBe(0);
   await fireEvent.submit(form);
   expect(itemsContainer.childElementCount).toBe(1);

   const deleteEl = itemsContainer.querySelector(".delete");

   await fireEvent.click(deleteEl);
   expect(itemsContainer.childElementCount).toBe(0);
});

test("predict total items", async () => {
   const { container } = render(Todo);
   const totalItems = container.querySelector("h3");
   const form = container.querySelector("form");

   expect(totalItems).toHaveTextContent("Items : 0");
   await fireEvent.submit(form);
   expect(totalItems).toHaveTextContent("Items : 1");

   for (let i = 0; i < 5; i++) {
      await fireEvent.submit(form);
   }

   expect(totalItems).toHaveTextContent("Items : 6");

   const deleteEl = container.querySelector(".delete");

   await fireEvent.click(deleteEl);
   expect(totalItems).toHaveTextContent("Items : 5");

   for (let i = 0; i < 5; i++) {
      await fireEvent.click(deleteEl);
   }

   expect(totalItems).toHaveTextContent("Items : 0");
});

test("test delete all items button", async () => {
   const { container } = render(Todo);
   const form = container.querySelector("form");
   const totalItems = container.querySelector("h3");
   const itemsContainer = container.querySelector(".items");
   const deleteAllEl = container.querySelector(".delete_all");

   for (let i = 0; i < 5; i++) {
      await fireEvent.submit(form);
   }

   expect(itemsContainer.childElementCount).not.toBe(0);
   await fireEvent.click(deleteAllEl);
   expect(itemsContainer.childElementCount).toBe(0);
   expect(totalItems).toHaveTextContent("Items : 0");
});

test("is delete all items button disabled or not", async () => {
   const { container } = render(Todo);
   const form = container.querySelector("form");
   const deleteAllEl = container.querySelector(".delete_all");

   expect(deleteAllEl.disabled).toBe(true);
   await fireEvent.submit(form);
   expect(deleteAllEl.disabled).toBe(false);
});
