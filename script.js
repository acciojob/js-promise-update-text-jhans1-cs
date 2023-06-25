//your JS code here. If required.
 function delayedGreeting() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000);
        });
      }

      delayedGreeting().then((message) => {
        const outputElement = document.getElementById("output");
        outputElement.textContent = message;
      });