import { Link } from "react-router-dom";
export const contactInfo = [
  {
    title: "contact",
    content: [
      {
        label: "press",
        link: (
          <a
            href="mailto:Grace@doe.co.nz"
            title="mailto:Grace@doe.co.nz"
            className="underline"
          >
            Grace@doe.co.nz
          </a>
        ),
      },
      {
        label: "careers",
        link: (
          <a
            href="mailto:Shenine@doe.co.nz"
            title="mailto:Shenine@doe.co.nz"
            className="underline"
          >
            Shenine@doe.co.nz
          </a>
        ),
      },
    ],
  },
  {
    title: "connect with us",
    content: [
      {
        link: (
          <a
            href="https://www.instagram.com/doe.donuts/"
            target="_blank"
            title="https://www.instagram.com/doe.donuts/"
            className="underline"
          >
            Instagram
          </a>
        ),
      },
      {
        link: (
          <a
            href="https://www.facebook.com/Doedoenuts"
            target="_blank"
            title="https://www.facebook.com/Doedoenuts"
            className="underline"
          >
            Facebook
          </a>
        ),
      },
    ],
  },
  {
    title: "locations",
    content: [
      {
        link: (
          <Link
            to="/ourLocations#grey-lynn"
            title="grey-lynn"
            className="underline"
          >
            Greylynn
          </Link>
        ),
      },
      {
        link: (
          <Link
            to="/ourLocations#commercial-bay"
            title="commercial-bay"
            className="underline"
          >
            Commercial Bay
          </Link>
        ),
      },
    ],
  },
];
