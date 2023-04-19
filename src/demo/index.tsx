import MarkdownIt from 'markdown-it';
import { createRoot } from 'react-dom/client';
import { MarkdownWrapper } from '../markdown-wrapper';

const rawMarkdown = `
# Markdown-It React

A better way to render markdown in React, without _dangerouslySetInnerHtml_.
MIT Licensed.
Features:

* **Extensible**, so that you can insert custom _ElementTypes_, such as using _Link_ instead of the default _a_.

Have fun!
`;

const mdStr =
    '<h1>惺惺相惜</h1><script>window.alert("hello from dangerously-set-inner-html");</script>\n\n`forwardRef` 和 `ref` 都是 React 中与访问 `DOM` 元素或组件实例相关的 `API`。`forwardRef` 可以访问在父组件中定义的 `ref`，而 `ref` 与 `useRef` 可以访问 `DOM` 元素或组件的实例。\n\n具体来说：\n\n- `forwardRef` 是一个高阶函数，它接受一个渲染函数，并返回一个新的组件，该组件可以将父组件传递下来的 `ref` 属性转发给其内部的子组件。这样做的作用是可以将 `ref` 关联到内部的子组件，从而方便对子组件进行各种操作。例如：\n\n   ```\n   const MyInput = forwardRef((props, ref) => {\n     return <input ref={ref} {...props} />;\n   });\n   ```\n\n   父组件可以将 `ref` 传递给 `MyInput` 这个组件，并将该 `ref` 作为参数传递给 `forwardRef` 函数中定义的渲染函数。在这个例子中，我们建立了一个 `MyInput` 组件，它可以将接收到的 `ref` 转发给内部的 input 元素上。\n\n- `ref` 属性主要用于访问 `DOM` 元素或组件实例。在类组件中，可以使用 `React.createRef()` 创建一个 `ref` 对象并将其关联到组件中确定的元素或组件实例，进而可以在组件中使用 `this.refName.current` 访问该元素或组件实例。例如：\n\n  ```\n  class MyComponent extends React.Component {\n    constructor(props) {\n      super(props);\n      this.myRef = React.createRef();\n    }\n\n    render() {\n      return <div ref={this.myRef}>Hello World!</div>;\n    }\n  }\n  ```\n\n  在这个例子中，我们创建了一个 `ref` 对象 `myRef` 并将其关联到 `div` 元素上。这样，我们就可以在组件的其他方法中使用 `this.myRef.current` 来访问该 `div` 元素。\n\n- `useRef` 是一个 `Hook`，主要用于在函数式组件中访问 `DOM` 元素或组件实例。与 `ref` 类似，我们也可以使用 `React.useRef()` 来创建一个 `ref` 对象。不同之处在于，我们不需要使用 `this` 关键字来访问 `ref.current` 属性，而是直接使用 `ref.current` 即可访问。例如：\n\n  ```\n  import { useRef } from \'react\';\n\n  function MyComponent() {\n    const myRef = useRef(null);\n\n    function handleClick() {\n      console.log(myRef.current.value);\n    }\n\n    return (\n      <div>\n        <input type="text" ref={myRef} />\n        <button onClick={handleClick}>Click Me</button>\n      </div>\n    );\n  }\n  ```\n\n  在这个例子中，我们使用 `useRef` 创建了一个 `myRef` 对象，并将其关联到 input 元素上。然后，我们在 `handleClick` 函数中可以使用 `myRef.current.value` 访问 input 元素的值。\n\n总的来说，`forwardRef` 可以将父组件传递下来的 `ref` 传递给内部的子组件，而 `ref` 和 `useRef` 则都可以用于访问 `DOM` 元素或组件实例。不同之处在于 `ref` 主要应用于类组件中，而 `useRef` 则主要应用于函数式组件中。';

// todo: wrap this up in a playground-type thing with a textarea input and render button

const mdi = new MarkdownIt({
    html: true,
});

const root = createRoot(document.getElementById('root')!);
root.render(
    <MarkdownWrapper
        md={mdi}
        rendererOpts={{
            renderRules: {
                pre: (_, attrs, content, children) => <em>{content}</em>,
            },
        }}
    >
        {mdStr}
    </MarkdownWrapper>,
);
