import { createElement } from "./utils";

export default function EncryptForm() {
  const form = createElement("form", { class: "encrypt-form" });
  const input = createElement("textarea", { placeholder: "Enter text to encrypt..." });
  const button = createElement("button", {}, "Encrypt");

  form.appendChild(input);
  form.appendChild(button);

  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", input.value);

    const res = await fetch("/api/encrypt-text", {
      method: "POST",
      body: formData,
    });

    const { encrypted } = await res.json();
    alert("Encrypted Text:\n" + encrypted);
  };

  return form;
}