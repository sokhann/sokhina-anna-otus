const getPath = (node) => {
  const getChildPositionIndex = (node, isFilterByTag = true) => {
    const allSiblings = Array.from(node.parentNode.children)
    const sameTypeSiblings = allSiblings.filter((sibling) =>
      isFilterByTag
        ? sibling.tagName.toLowerCase() === node.tagName.toLowerCase()
        : sibling.className === node.className
    )
    return sameTypeSiblings.length > 1
      ? `:nth-child(${sameTypeSiblings.indexOf(node) + 1})`
      : ""
  }

  const getTagNameSelector = (node) => {
    return `${node.tagName.toLowerCase()}${getChildPositionIndex(node)}`
  }

  const getIdSelector = (node) => {
    return `#${node.id}`
  }

  const getClassNameSelector = (node) => {
    return `.${Array.from(node.classList).join(".")}${getChildPositionIndex(
      node,
      false
    )}`
  }

  const isUniqueSelector = (selector) => {
    return document.querySelectorAll(selector).length === 1
  }

  if (!node) {
    return "Element not found"
  } else {
    if (isUniqueSelector(node.tagName.toLowerCase())) {
      return getTagNameSelector(node)
    }
    if (node.id !== "") {
      return getIdSelector(node)
    }
    if (
      node.classList.length > 0 &&
      isUniqueSelector(getClassNameSelector(node))
    ) {
      return getClassNameSelector(node)
    }

    let currentNode = node
    let resultPath = []

    while (currentNode !== document.body) {
      let parent =
        currentNode.id !== ""
          ? getIdSelector(currentNode)
          : currentNode.classList.length > 0
          ? getClassNameSelector(currentNode)
          : getTagNameSelector(currentNode)

      resultPath.push(parent)
      currentNode = currentNode.parentElement
    }

    return resultPath.reverse().join(" > ")
  }
}

document.querySelector("*").addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault()

  console.log("Selector for node: ", getPath(e.target))
})

module.exports = getPath
