import { createElement, render } from "./utils";
import EncryptForm from "./EncryptForm";
import FileDrop from "./FileDrop";

export default class App {
  constructor({ target }: { target: HTMLElement }) {
    const wrapper = createElement("div", { class: "app-container" });
    wrapper.appendChild(EncryptForm());
    wrapper.appendChild(FileDrop());
    target.appendChild(wrapper);
  }
}