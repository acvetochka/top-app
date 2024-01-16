This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.


- ### Title

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `children`  | `undefined` | required, any text content                    |
| `tag`       | `undefined` | required, `h1`, `h2`, `h3`                    |

- ### Paragraph

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `size`      | `normal`    | `normal`, `large`, `small`                    |
| `children`  | `undefined` | required, any content                         |
| `className` | `undefined` | add custom or additional css class you'd need |

- ### Button

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `appearance`| `undefined` | `primary`, `ghost`                            |
| `children`  | `undefined` | required, any content                         |
| `className` | `undefined` | add custom or additional css class you'd need |
| `allow`     | `none`      | `right`, `down`, `none`                       |

- ### Tag 

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `children`  | `undefined` | required, any content                         |
| `size`      | `small`     | `small`, `large`                              |    
| `color`     | `ghost`     | `ghost`, `red`, `gray`, `green`, `accent`     |
| `href`      | `undefined` | add href for link you'd need                  |
| `className` | `undefined` | add custom or additional css class you'd need |

- ### Rating

| Props       | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `isEditable`| `false`     | Use, if necessary, to edit an element         |
| `rating`    | `undefined` | required, number from 1 to 5                  |                              |
| `setRating` | `undefined` | function for viewing the rating status        |

- ### Card 

| Props       | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `children`  | `undefined` | required, any content                         |
| `color`     | `white`     | `white`, `blue`                               |
