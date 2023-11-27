let example_data = {
  blocks: [
    {
      type: "header",
      data: {
        text: "Example: header plugin",
        level: 3,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "This is an example of using EditorJs, with @juratbek/editorjs-header package",
      },
    },
    {
      type: "delimiter",
    },
    {
      type: "paragraph",
      data: {
        text: "this is a text before a quote",
      },
    },
    {
      type: "quote",
      data: {
        text: "This is a quote from a famous person. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        caption: "a famous person name",
        alignment: "left",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "this is a text after a quote",
      },
    },
  ],
};
