export type Tank = {
  id: number;
  image: string;
  category: string;
  capacity: number;
  diameter: number;
  height: number;
  width: number | null;
  length: number | null;
};

export type Variation = {
  "Capacity (L)": number;
  "D (cm)"?: number;
  "H (cm)": number;
  "Connector (inch)": number;
  "W (cm)"?: number;
  "L (cm)"?: number;
  type?: string;
};

export type Product = {
  capacity?: string;
  images: string[];
  variations: Variation[];
};

export type Category = {
  category: string;
  products: Product[];
};

export type Distributor = {
  name: string;
  city: string;
  location: string;
  phone: string;
  facebook: string;
};

export const categories: Category[] = [
  {
    category: "vertical",
    products: [
      {
        capacity: "low",
        images: ["", "/2.png", "", "/8.png", "/5.png"],
        variations: [
          {
            "Capacity (L)": 60,
            "D (cm)": 51,
            "H (cm)": 57,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 100,
            "D (cm)": 50,
            "H (cm)": 57,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 300,
            "D (cm)": 62,
            "H (cm)": 100,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 500,
            "D (cm)": 84,
            "H (cm)": 98,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 500,
            "D (cm)": 75,
            "H (cm)": 130,
            "Connector (inch)": 1,
            type: "طويل",
          },
        ],
      },
      {
        capacity: "medium",
        images: ["/12.png", "","", "/4.png", "", "/3.png","/11.png"],
        variations: [
          {
            "Capacity (L)": 1000,
            "D (cm)": 100,
            "H (cm)": 130,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 1000,
            "D (cm)": 88,
            "H (cm)": 170,
            "Connector (inch)": 1,
            type: "طويل",
          },
          {
            "Capacity (L)": 1500,
            "D (cm)": 0,
            "H (cm)": 0,
            "Connector (inch)": 1,
            type: "طويل",
          },
          {
            "Capacity (L)": 2000,
            "D (cm)": 125,
            "H (cm)": 180,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 2000,
            "D (cm)": 115,
            "H (cm)": 200,
            "Connector (inch)": 1,
            type: "طويل",
          },
          {
            "Capacity (L)": 2000,
            "D (cm)": 160,
            "H (cm)": 128,
            "Connector (inch)": 1,
            type: "قصير",
          },
          {
            "Capacity (L)": 3000,
            "D (cm)": 160,
            "H (cm)": 185,
            "Connector (inch)": 1,
          },
        ],
      },
      {
        capacity: "high",
        images: ["", "/1.png", "", "", "/10.png"],
        variations: [
          {
            "Capacity (L)": 4000,
            "D (cm)": 168,
            "H (cm)": 190,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 5000,
            "D (cm)": 183,
            "H (cm)": 217,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 6000,
            "D (cm)": 183,
            "H (cm)": 237,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 8000,
            "D (cm)": 183,
            "H (cm)": 320,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 10000,
            "D (cm)": 210,
            "H (cm)": 320,
            "Connector (inch)": 1,
          },
        ],
      },
    ],
  },
  {
    category: "horizontal",
    products: [
      {
        images: ["", "/6.png", "/7.png", ""],
        variations: [
          {
            "Capacity (L)": 500,
            "W (cm)": 58,
            "H (cm)": 73,
            "L (cm)": 155,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 750,
            "W (cm)": 73,
            "H (cm)": 87,
            "L (cm)": 170,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 1000,
            "W (cm)": 110,
            "H (cm)": 120,
            "L (cm)": 127,
            "Connector (inch)": 1,
          },
          {
            "Capacity (L)": 2000,
            "W (cm)": 123,
            "H (cm)": 143,
            "L (cm)": 180,
            "Connector (inch)": 1,
          },
        ],
      },
      {
        images: ["/9.png"],
        variations: [
          {
            "Capacity (L)": 300,
            "W (cm)": 61,
            "H (cm)": 54,
            "L (cm)": 128,
            "Connector (inch)": 1,
          },
        ],
      },
    ],
  },
];

export const bestSellers: Tank[] = [
  {
    id: 1,
    image: "/1.png",
    category: "vertical",
    capacity: 3000,
    diameter: 160,
    height: 185,
    width: null,
    length: null,
  },
  {
    id: 2,
    image: "/6.png",
    category: "horizontal",
    capacity: 1000,
    diameter: 160,
    height: 112,
    width: 112,
    length: null,
  },
];

export const distributors: Distributor[] = [
  {
    name: "Nakouzi",
    city: "Saida",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8176184166296!2d35.37462467482493!3d33.558114635069415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef03d2c3caded%3A0x5d25fb3d6ee7a8!2zTmFrb3V6aSBmb3IgVHJhZGluZyBhbmQgQ29udHJhY3RpbmcgfCDYtNix2YPYqSDYp9mE2YbZgtmI2LLZiiDZhNmE2KrYrNin2LHYqSDZiCDYp9mE2YXZgtin2YjZhNin2Ko!5e0!3m2!1sen!2slb!4v1717701720738!5m2!1sen!2slb",
    phone: "07/730577",
    facebook: "https://www.facebook.com/Nakouzitc/",
  },
  {
    name: "ADMit",
    city: "Aramoun",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53059.523514270884!2d35.46725968571638!3d33.78081088338716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1ed6339112d7%3A0xfca502bff381b523!2sAramoun!5e0!3m2!1sen!2slb!4v1717701545020!5m2!1sen!2slb",
    phone: "03/657578",
    facebook: "https://www.facebook.com/ADMit.co/",
  },
];
