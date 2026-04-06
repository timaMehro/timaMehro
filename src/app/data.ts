import type { Subjects } from "./types"

export const subjects: Subjects = [
  {
    id: 6,
    title: "Test",
    color: "indigo",
    articles: [
      { id: 1, title: "JavaScript Unit Testing" },
      { id: 2, title: "Different Testing Types for Frontend Applications" },
      // { id: 2, title: "React Component Testing with RTL" },
    ],
  },
  {
    id: 1,
    title: "React",
    color: "pink",
    articles: [
      { id: 1, title: "Actions" },
      { id: 2, title: "useActionState" },
      { id: 3, title: "React DOM: <form> Actions" },
      { id: 4, title: "React DOM: New hook: useFormStatus" },
      { id: 5, title: "New hook: useOptimistic" },
      { id: 6, title: "New hook: useOptimistic" },
      { id: 7, title: "New API: use " },
      { id: 8, title: "New React DOM Static APIs" },
      { id: 9, title: "React Server Components" },
      { id: 10, title: "NServer Actions" },
    ],
  },
  // {
  //   id: 2,
  //   title: "CSS",
  //   color: "yellow",
  //   articles: [
  //     { id: 1, title: "CSS Grid for Complex Layouts" },
  //     { id: 2, title: "Responsive Design with Tailwind" },
  //     { id: 3, title: "Keyframe Animations and Transitions" },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "JavaScript",
  //   color: "green",
  //   articles: [
  //     { id: 1, title: "Deep Dive into Event Loop" },
  //     { id: 2, title: "Understanding Closures and Scope" },
  //     { id: 3, title: "Clean ES6+ Code Practices" },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Next.js",
  //   color: "purple",
  //   articles: [
  //     { id: 1, title: "App Router vs Pages Router" },
  //     { id: 2, title: "Dynamic Routing in Next.js 13+" },
  //     { id: 3, title: "SEO Optimization Strategies" },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "TypeScript",
  //   color: "orange",
  //   articles: [
  //     { id: 1, title: "Ensuring Type Safety in React" },
  //     { id: 2, title: "Advanced Utility Types" },
  //     { id: 3, title: "API Type Handling Best Practices" },
  //   ],
  // },
]

export interface TreeNode {
  id: number
  name: string
  isFolder: boolean
  subTree: TreeNode[]
}

export const treeData = [
  {
    id: 1,
    name: "This is the first",
    isFolder: true,
    subTree: [
      {
        id: 2,
        name: "Folder 1",
        isFolder: true,
        subTree: [
          {
            id: 3,
            name: "File 1-1",
            isFolder: false,
            subTree: [],
          },
          {
            id: 4,
            name: "Folder 1-2",
            isFolder: true,
            subTree: [
              {
                id: 5,
                name: "File 1-2-1",
                isFolder: false,
                subTree: [],
              },
              {
                id: 6,
                name: "Folder 1-2-2",
                isFolder: true,
                subTree: [
                  {
                    id: 7,
                    name: "File 1-2-2-1",
                    isFolder: false,
                    subTree: [],
                  },
                  {
                    id: 8,
                    name: "Folder 1-2-2-2",
                    isFolder: true,
                    subTree: [
                      {
                        id: 9,
                        name: "File 1-2-2-2-1",
                        isFolder: false,
                        subTree: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Folder 2",
        isFolder: true,
        subTree: [
          {
            id: 11,
            name: "File 2-1",
            isFolder: false,
            subTree: [],
          },
          {
            id: 12,
            name: "Folder 2-2",
            isFolder: true,
            subTree: [
              {
                id: 13,
                name: "File 2-2-1",
                isFolder: false,
                subTree: [],
              },
              {
                id: 14,
                name: "Folder 2-2-2",
                isFolder: true,
                subTree: [
                  {
                    id: 15,
                    name: "File 2-2-2-1",
                    isFolder: false,
                    subTree: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: "File at root (first)",
        isFolder: false,
        subTree: [],
      },
    ],
  },
  {
    id: 17,
    name: "This is the second",
    isFolder: true,
    subTree: [
      {
        id: 18,
        name: "Folder A",
        isFolder: true,
        subTree: [
          {
            id: 19,
            name: "File A-1",
            isFolder: false,
            subTree: [],
          },
          {
            id: 20,
            name: "Folder A-2",
            isFolder: true,
            subTree: [
              {
                id: 21,
                name: "File A-2-1",
                isFolder: false,
                subTree: [],
              },
              {
                id: 22,
                name: "Folder A-2-2",
                isFolder: true,
                subTree: [
                  {
                    id: 23,
                    name: "File A-2-2-1",
                    isFolder: false,
                    subTree: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 24,
        name: "Folder B",
        isFolder: true,
        subTree: [
          {
            id: 25,
            name: "File B-1",
            isFolder: false,
            subTree: [],
          },
        ],
      },
      {
        id: 26,
        name: "File at root (second)",
        isFolder: false,
        subTree: [],
      },
    ],
  },
]
