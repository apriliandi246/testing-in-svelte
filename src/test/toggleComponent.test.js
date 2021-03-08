import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import ToggleComponent from "../components/ToggleCompoonent.svelte";

describe("ToggleComponent", () => {
   test("toggle the element when click event is fire", async () => {
      const { container } = render(ToggleComponent);
      const btn = container.querySelector(".btn");

      expect(container.querySelector(".main")).not.toBeNull();
      await fireEvent.click(btn);
      expect(container.querySelector(".main")).toBeNull();
   });

   test("check the status", async () => {
      const { container } = render(ToggleComponent);
      const btn = container.querySelector(".btn");

      expect(btn).toHaveTextContent("false");
      await fireEvent.click(btn);
      expect(btn).toHaveTextContent("true");
   });
});
