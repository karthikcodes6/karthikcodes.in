---
id: rich-text-editor-notes
title: Rich Editor Notes
---

## Zero Width
* Render text inside void nodes with a zero-width space. So the node can contain selection but the text is not visible.
* If the text is empty, it's because it's on the edge of an inline node, so we render a zero-width space so that the selection can be inserted next to it still.
* Leaf strings without text, render as zero-width strings.
* A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at zero-width node has an offset of 1 so we have to check if we are in a zero-width node and adjust the offset accordingly.