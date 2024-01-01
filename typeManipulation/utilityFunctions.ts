const func = async () => {
  return {
    id: 123,
  };
};

type Result2 = ReturnType<typeof func>;
//   ^?

type Result = Awaited<ReturnType<typeof func>>;
//   ^?

async function func2(a: number, b: number) {
  return {
    id: 123,
  };
};
type Result3 = Awaited<ReturnType<typeof func2>>;
//   ^?

type params = Parameters<typeof func2>;
//   ^?