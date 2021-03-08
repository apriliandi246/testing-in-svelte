import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Toggle from "../components/Toggle.svelte";

describe("Toggle Component", () => {
   test("checking the status", async () => {
      const { container } = render(Toggle);
      const button = container.getElementsByTagName("button");

      expect(button[0]).toHaveTextContent("false");
      await fireEvent.click(button[0]);
      expect(button[0]).toHaveTextContent("true");
      await fireEvent.click(button[0]);
      expect(button[0]).toHaveTextContent("false");
   });
});
