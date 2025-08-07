import { vi, expect, describe, it } from "vitest"

describe("test mock function", () => {
  it("test MOCK", () => {
    const sentMessage = vi.fn()
    sentMessage()
    expect(sentMessage).toHaveBeenCalledTimes(1)
  })
})

export function getCoupons() {
  return [
    { code: "SAVE20NOW", discount: 0.2 },
    { code: "DISCOUNT50OFF", discount: 0.5 },
  ]
}
