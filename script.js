function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

document.getElementById("imageUpload").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("profilePic").src = e.target.result;
  };
  reader.readAsDataURL(this.files[0]);
});

// ✅ تفاعل عند الضغط على الوظيفة
document.getElementById("job").addEventListener("click", function () {
  const jobText = document.getElementById("job").innerText;
  if (jobText === "Web Development") {
    document.getElementById("job").innerText = "Frontend Learner 🌐";
  } else {
    document.getElementById("job").innerText = "Web Development";
  }
});
