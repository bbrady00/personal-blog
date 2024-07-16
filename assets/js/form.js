// form.js
document.addEventListener("DOMContentLoaded", function () {
  const blogForm = document.getElementById("blogForm");

  blogForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (
      username.trim() === "" ||
      title.trim() === "" ||
      content.trim() === ""
    ) {
      alert("Please complete all fields.");
      return;
    }

    const postData = {
      username,
      title,
      content,
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(postData);
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "blog.html";
  });
});
