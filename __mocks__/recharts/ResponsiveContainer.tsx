import { Children, cloneElement } from "react";

export default function ResponsiveContainer(props: any) {
  return (
    <div>
      {Children.map(props.children, (child) =>
        cloneElement(child, { width: 100, height: 100 }),
      )}
    </div>
  );
}
