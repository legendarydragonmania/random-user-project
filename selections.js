import getElement from "./utils/getElement.js"

const img = getElement(".user-img")
const title = getElement(".user-title")
const value = getElement(".user-value")
const btn = getElement(".btn")
const buttons = [...document.querySelectorAll(".icon")]

export { img, title, value, btn, buttons };