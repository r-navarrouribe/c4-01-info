console.log("Hackeando tu sistema operativo...");

setTimeout(() => {
  if (process.platform === "linux") {
    console.log("Tú molas");
  } else if (process.platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (process.platform === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }
}, 2000);
