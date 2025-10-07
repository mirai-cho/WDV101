document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ページ遷移を止める

    const formData = new FormData(form);
    const submitBtn = form.querySelector("button");
    submitBtn.disabled = true; // 二重送信防止

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.innerHTML = `
        <p class="thank-message">
        🌸 送信完了しました！ありがとうございます。
        </p>
        `;

      } else {
        alert("エラーが発生しました。もう一度お試しください。");
      }
    } catch (error) {
      alert("通信エラーが発生しました。");
    } finally {
      submitBtn.disabled = false;
    }
  });
});
