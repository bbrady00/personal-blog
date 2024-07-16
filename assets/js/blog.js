// blog.js

document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPosts");
  const toggleTheme = document.getElementById("toggleTheme");

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleTheme.checked = true;
  }

  // Toggle theme function
  toggleTheme.addEventListener("change", function () {
    if (toggleTheme.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // Function to render blog posts
  function renderBlogPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    blogPostsContainer.innerHTML = "";

    posts.forEach(function (post) {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;

      const contentElement = document.createElement("p");
      contentElement.textContent = post.content;

      const authorElement = document.createElement("p");
      authorElement.textContent = `By: ${post.username}`;

      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(authorElement);

      blogPostsContainer.appendChild(postElement);
    });
  }

  renderBlogPosts();
});
