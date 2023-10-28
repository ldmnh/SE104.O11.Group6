    

console.log("aaaaaa");
      const editView = document.getElementById("edit-profile");
      const defaultView = document.getElementById("view-profile");
      const editBtn = document.querySelector(".form--submit2-default");
      const cancelBtn = document.querySelector(".form--submit1");
      editView.style.display = "none";
      
      const redirect2EditView = () => {
        defaultView.style.display = "none";
        editView.style.display = "block";
      };
      
      const redirect2EdefaultView = () => {
        defaultView.style.display = "block";
        editView.style.display = "none";
      };
      cancelBtn.addEventListener("click", redirect2EdefaultView);
      editBtn.addEventListener("click", redirect2EditView);
