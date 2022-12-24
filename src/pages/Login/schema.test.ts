import { renderHook } from "@testing-library/react";
import { useSchema } from "./schema";

it("ユーザー名は16文字以下", () => {
  const { result } = renderHook(() => useSchema());
});
