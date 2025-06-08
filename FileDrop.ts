import { createElement } from "./utils";

export default function FileDrop() {
  const form = createElement("form", { class: "file-drop" });
  const input = createElement("input", { type: "file" });
  const button = createElement("button", {}, "Encrypt File");

  form.appendChild(input);
  form.appendChild(button);

  form.onsubmit = async (e) => {
    e.preventDefault();
    const file = input.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/encrypt-file", {
      method: "POST",
      body: formData,
    });

    const { encrypted } = await res.json();
    alert("Encrypted File Data:\n" + encrypted);
  };

  return form;
}