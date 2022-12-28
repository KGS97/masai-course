export default function RelatedPages(UpdateRelatedPagesHandler, response) {
  let head = response.headers.get("Link");
  head = head.split(",");
  head = head.map((elem) => elem.split(";"));
  head = head.map((elem) => {
    let string = [elem[0], elem[1].substring(6, 10)];
    return string;
  });
  let relatedPages = {};
  head.forEach((elem) => {
    if (elem[1][0] === "f")
      relatedPages.first = elem[0].substring(1, elem[0].length - 1);
    else if (elem[1][0] === "p")
      relatedPages.previous = elem[0].substring(2, elem[0].length - 1);
    else if (elem[1][0] === "n")
      relatedPages.next = elem[0].substring(2, elem[0].length - 1);
    else if (elem[1][0] === "l")
      relatedPages.last = elem[0].substring(2, elem[0].length - 1);
  });
  UpdateRelatedPagesHandler(relatedPages);
}
