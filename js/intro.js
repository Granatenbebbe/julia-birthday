const envelope = document.querySelector(".envelope-wrapper");
        const heart = document.querySelector(".heart");
        
        heart.addEventListener("click", ()=>{
            envelope.classList.toggle("flap");
             
            // 1. Fade-Out Overlay Start
            // Wir starten jetzt schon bei 2800ms (2.8 Sekunden).
            // Das ist nur 0.3s nachdem der Zoom beginnt (Zoom-Start war bei 2.5s).
            setTimeout(() => {
                document.body.classList.add("start-fade");
            }, 2600); 

            // 2. Seitenwechsel
            // Da wir früher dunkel werden, können wir auch früher wechseln.
            // Der Fade dauert 1.5s (laut CSS). 2.8s + 1.5s = 4.3s.
            // Wir wechseln also bei 4500ms, dann ist es sicher schwarz.
            setTimeout(() => {
                window.location.href = "FLORES.html";
            }, 4100); 
        })
    