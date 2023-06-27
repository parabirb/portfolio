// shamelessly stolen
export function clickOutside(node) {
    function handleClick(e) {
        if (node && !node.contains(e.target) && e.target.textContent !== "START") {
            node.dispatchEvent(new CustomEvent("click_outside", node));
        }
    }
    document.addEventListener("mousedown", handleClick, true);
    return {
        destroy: () => document.removeEventListener("mousedown", handleClick, true)
    };
}