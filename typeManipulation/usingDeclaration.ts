export {}

async function getDatabase() {
  return {
    db: {
      getUsers: async () => ["Uzair", "Azeez"],
    },
    [Symbol.asyncDispose]
  }
}

await using db = await getDatabase();