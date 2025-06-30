import { expect, test, describe, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "./page"

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))

// Mock the child components to focus on page structure
vi.mock("./Nav", () => ({
  default: () => <div data-testid="nav-component">Navigation</div>,
}))

vi.mock("./profileTitle", () => ({
  default: () => <div data-testid="profile-title-component">Profile Title</div>,
}))

vi.mock("./summary", () => ({
  default: () => <div data-testid="summary-component">Summary</div>,
}))

vi.mock("./skill", () => ({
  default: () => <div data-testid="skills-component">Skills</div>,
}))

vi.mock("./workExperience", () => ({
  default: () => <div data-testid="work-experience-component">Work Experience</div>,
}))

vi.mock("./workExperienceMobile", () => ({
  default: () => <div data-testid="work-experience-mobile-component">Work Experience Mobile</div>,
}))

describe("Home Page", () => {
  beforeEach(() => {
    // Reset any mocks before each test
    vi.clearAllMocks()
  })

  test("renders main page structure", () => {
    render(<Home />)

    // Check that main element exists
    const mainElement = screen.getByRole("main")
    expect(mainElement).toBeInTheDocument()
  })

  test("renders all child components", () => {
    render(<Home />)

    // Check that all child components are rendered
    expect(screen.getByTestId("nav-component")).toBeInTheDocument()
    expect(screen.getByTestId("profile-title-component")).toBeInTheDocument()
    expect(screen.getByTestId("summary-component")).toBeInTheDocument()
    expect(screen.getByTestId("skills-component")).toBeInTheDocument()
    expect(screen.getByTestId("work-experience-component")).toBeInTheDocument()
    expect(screen.getByTestId("work-experience-mobile-component")).toBeInTheDocument()
  })

  test("renders footer with correct content", () => {
    render(<Home />)

    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()

    // Check footer text content
    expect(footer).toHaveTextContent("Built with")
    expect(footer).toHaveTextContent("by Tima Mehro")
    expect(footer).toHaveTextContent("Last updated 2025")
  })

  test("footer contains heart emoji", () => {
    render(<Home />)

    const footer = screen.getByRole("contentinfo")
    const heartElement = footer.querySelector(".text-red-500")
    expect(heartElement).toBeInTheDocument()
    expect(heartElement).toHaveTextContent("♥")
  })

  test("main element has correct CSS classes", () => {
    render(<Home />)

    const mainElement = screen.getByRole("main")
    expect(mainElement).toHaveClass("min-h-screen")
    expect(mainElement).toHaveClass("bg-black")
    expect(mainElement).toHaveClass("text-white")
    expect(mainElement).toHaveClass("md:px-60")
    expect(mainElement).toHaveClass("md:py-8")
    expect(mainElement).toHaveClass("px-8")
    expect(mainElement).toHaveClass("py-5")
  })

  test("desktop work experience is hidden on mobile", () => {
    render(<Home />)

    const desktopWorkExperience = screen.getByTestId("work-experience-component")
    const parentDiv = desktopWorkExperience.parentElement

    expect(parentDiv).toHaveClass("hidden")
    expect(parentDiv).toHaveClass("md:block")
  })

  test("mobile work experience is hidden on desktop", () => {
    render(<Home />)

    const mobileWorkExperience = screen.getByTestId("work-experience-mobile-component")
    const parentDiv = mobileWorkExperience.parentElement

    expect(parentDiv).toHaveClass("md:hidden")
  })

  test("footer has correct styling classes", () => {
    render(<Home />)

    const footer = screen.getByRole("contentinfo")
    expect(footer).toHaveClass("text-center")
    expect(footer).toHaveClass("text-[10px]")
    expect(footer).toHaveClass("text-gray-500")
    expect(footer).toHaveClass("mt-10")
  })

  test("page renders without crashing", () => {
    expect(() => render(<Home />)).not.toThrow()
  })

  test("main element has correct font family", () => {
    render(<Home />)

    const mainElement = screen.getByRole("main")
    expect(mainElement).toHaveClass("font-[family-name:var(--font-geist-sans)]")
  })

  test("components are rendered in correct order", () => {
    render(<Home />)

    const mainElement = screen.getByRole("main")
    const children = Array.from(mainElement.children)

    // Check that components are rendered in the expected order
    expect(children[0]).toContainElement(screen.getByTestId("nav-component"))
    expect(children[1]).toContainElement(screen.getByTestId("profile-title-component"))
    expect(children[2]).toContainElement(screen.getByTestId("summary-component"))
    expect(children[3]).toContainElement(screen.getByTestId("skills-component"))
  })
})
