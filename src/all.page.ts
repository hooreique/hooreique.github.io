export const layout = "all.vto";

export default function* ({ search, paginate }: Lume.Data) {
  for (
    const page of paginate(
      search.pages("layout=scenario.vto", "date=desc"),
      { size: 5, url: (n) => `/all/${n}` },
    )
  ) {
    yield page;
  }
}
