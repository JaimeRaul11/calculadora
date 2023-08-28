document.getElementById("calculate").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const planet = document.getElementById("planet").value;
    let gravity;
  
    switch (planet) {
      case "mercurio":
        gravity = 3.7;
        break;
      case "venus":
        gravity = 8.87;
        break;
      case "marte":
        gravity = 3.71;
        break;
      case "jupiter":
        gravity = 24.79;
        break;
      case "saturno":
        gravity = 10.44;
        break;
      case "urano":
        gravity = 8.69;
        break;
      case "neptuno":
        gravity = 11.15;
        break;
      default:
        gravity = 9.81; // Earth's gravity
    }
  
    const calculatedWeight = (weight/9.81* gravity).toFixed(2);
    const result = `Tu peso en ${planet.charAt(0).toUpperCase() + planet.slice(1)} es de ${calculatedWeight} kg`;
    document.getElementById("result").textContent = result;
  });
  