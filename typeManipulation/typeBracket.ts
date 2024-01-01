function func(val: {}) { }

func("asdf");
func("");
func(3);
func(0);
func(true);
func({ name: "Bob" });
// @ts-expect-error
func(null);
// @ts-expect-error
func(undefined);