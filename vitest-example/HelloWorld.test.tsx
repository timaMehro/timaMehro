import { expect, test, describe } from "vitest"
import { render } from "vitest-browser-react"
import HelloWorld from "./HelloWorld.jsx"

describe("HelloWorld Component", () => {
  test("renders name", async () => {
    const { getByText } = render(<HelloWorld name="Vitest" />)
    await expect.element(getByText("Hello Vitest!")).toBeInTheDocument()
  })

  test("renders with different names", async () => {
    const { getByText } = render(<HelloWorld name="World" />)
    await expect.element(getByText("Hello World!")).toBeInTheDocument()
  })

  test("renders with empty string name", async () => {
    const { getByText } = render(<HelloWorld name="" />)
    await expect.element(getByText("Hello !")).toBeInTheDocument()
  })

  test("renders with special characters in name", async () => {
    const { getByText } = render(<HelloWorld name="Test@123!" />)
    await expect.element(getByText("Hello Test@123!!")).toBeInTheDocument()
  })

  test("renders with long name", async () => {
    const longName = "A".repeat(100)
    const { getByText } = render(<HelloWorld name={longName} />)
    await expect.element(getByText(`Hello ${longName}!`)).toBeInTheDocument()
  })

  test("renders h1 element", async () => {
    const { container } = render(<HelloWorld name="Test" />)
    const h1Element = container.querySelector("h1")
    expect(h1Element).toBeTruthy()
    await expect.element(h1Element).toBeInTheDocument()
  })

  test("renders div wrapper", async () => {
    const { container } = render(<HelloWorld name="Test" />)
    const divElement = container.querySelector("div")
    expect(divElement).toBeTruthy()
    await expect.element(divElement).toBeInTheDocument()
  })

  test("has correct text content", async () => {
    const { getByText } = render(<HelloWorld name="React" />)
    const element = getByText("Hello React!")
    await expect(element).toHaveTextContent("Hello React!")
  })

  test("renders multiple instances correctly", async () => {
    const { getByText } = render(
      <div>
        <HelloWorld name="First" />
        <HelloWorld name="Second" />
      </div>
    )

    await expect.element(getByText("Hello First!")).toBeInTheDocument()
    await expect.element(getByText("Hello Second!")).toBeInTheDocument()
  })
})
