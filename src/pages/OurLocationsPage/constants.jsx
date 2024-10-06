export const locations = [
  {
    location: "Grey Lynn",
    id: "grey-lynn",
    branchs: ["356 Great North Road", "Grey Lynn, Auckland"],
    openHours: ["Wed - Fri: 8am - 2pm", "Sat - Sun: 8:30am - 2pm"],
    links: [
      <a href="mailto:orders@doe.co.nz" title="mailto:orders@doe.co.nz" key={1}>
        orders@doe.co.nz
      </a>,
      <a href="https://goo.gl/maps/kxiS6Q9qHaCj11zj7" target="_blank" key={2}>
        View on Google Maps
      </a>,
    ],
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.5013751573797!2d174.74329342983546!3d-36.86589216673035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47bb6bc94e87%3A0x4f1129a484f5b331!2s356%20Great%20North%20Road%2C%20Grey%20Lynn%2C%20Auckland%201021%2C%20New%20Zealand!5e0!3m2!1sen!2seg!4v1727364887281!5m2!1sen!2seg"
        className="size-full object-cover object-center"
        allowFullScreen={true}
        loading="lazy"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    location: "Commercial Bay",
    id: "commercial-bay",
    branchs: ["Commercial Bay,", "Harbour Eats,", "Auckland CBD"],
    openHours: ["Mon - Fri: 9am - 6pm", "Sat - Sun: 10am - 6pm"],
    links: [
      <a href="mailto:orders@doe.co.nz" title="mailto:orders@doe.co.nz" key={1}>
        orders@doe.co.nz
      </a>,
      <a
        href="https://www.google.com/maps/place/Commercial+Bay/@-36.8438848,174.7661305,15z/data=!4m6!3m5!1s0x6d0d475817c0ee99:0x12f4a31879616774!8m2!3d-36.8438848!4d174.7661305!16s%2Fg%2F11f658y7jg"
        target="_blank"
        key={2}
      >
        View on Google Maps
      </a>,
    ],
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6384.039423451977!2d174.743409!3d-36.865947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47bb6bc94e87%3A0x4f1129a484f5b331!2s356%20Great%20North%20Road%2C%20Grey%20Lynn%2C%20Auckland%201021%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1727365233068!5m2!1sen!2sin"
        className="size-full object-cover object-center"
        allowFullScreen={true}
        loading="lazy"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    location: "Online Store",
    openHours: [
      "Pick Up: Wednesday to Sunday - 10am to 1pm",
      "Deliveries: Wednesday to Friday - 10am to 3pm",
    ],
    links: [
      <a href="mailto:orders@doe.co.nz" title="mailto:orders@doe.co.nz" key={1}>
        orders@doe.co.nz
      </a>,
    ],
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25543.529351318935!2d174.766131!3d-36.843885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d475817c0ee99%3A0x12f4a31879616774!2sCommercial%20Bay!5e0!3m2!1sen!2snz!4v1727365290213!5m2!1sen!2snz"
        className="size-full object-cover object-center"
        allowFullScreen={true}
        loading="lazy"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];
