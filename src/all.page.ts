export const url = "/all/1";

export const oldUrl = ["/", "/all/"];

export const layout = "all.vto";

export default function* ({ search, paginate }: Lume.Data) {
  for (
    const page of paginate(
      search.pages("layout=code.vto", "date=desc"),
      { size: 10, url: (n) => `/all/${n}` },
    )
  ) {
    yield page;
  }
}
