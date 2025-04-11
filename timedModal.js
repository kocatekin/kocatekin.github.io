//working format: day-month
const TimedModal = {
   dates: [
     { date: "11-04", message: "Modal Deneme!", imageLink: "https://t4.ftcdn.net/jpg/02/66/31/75/360_F_266317554_kr7DPOoM5Uty0YCeFU9nDZTt4a2LeMJF.jpg"},
     
     
   ],
 
   init: function () {
     this.injectStyles();
 
     const today = new Date();
     const todayStr = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}`;
     const match = this.dates.find(entry => entry.date === todayStr);
     if (match) {
       this.showModal(match.message, match.imageLink);
     }
   },
 
   injectStyles: function () {
     const style = document.createElement("style");
     style.textContent = `
       .timed-modal {
         position: fixed;
         top: 0; left: 0;
         width: 100%; height: 100%;
         background-color: rgba(0,0,0,0.6);
         display: flex;
         justify-content: center;
         align-items: center;
         z-index: 9999;
       }
       .timed-modal-content {
         background-color: white;
         padding: 2rem;
         border-radius: 10px;
         text-align: center;
         position: relative;
         max-width: 1200px;
         font-family: sans-serif;
       }
      .timed-modal-content img {
         width: 100%;
         height: auto;
         display: block;
         max-width: 100%;
         max-height: 80vh;
         border-radius: 8px;
      
      }

       .timed-modal-close {
         position: absolute;
         top: 8px;
         right: 12px;
         cursor: pointer;
         font-size: 12px;
       }
      
      
     `;
     document.head.appendChild(style);
   },
 
   showModal: function (message, imageLink) {
     const modal = document.createElement("div");
     modal.className = "timed-modal";
     modal.innerHTML = `
       <div class="timed-modal-content">
         <span class="timed-modal-close">X Kapat</span>
         <p>${message}</p>
         <img src='${imageLink}'>
       </div>
     `;
     document.body.appendChild(modal);
 
     document.querySelector(".timed-modal-close").onclick = () => modal.remove();
   }
 };
 
 // Auto-init on load
 window.addEventListener("DOMContentLoaded", () => TimedModal.init());
 
