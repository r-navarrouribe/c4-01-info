const os = require("os");
const fs = require("fs");

console.log("Hackeando tu sistema operativo...");

setTimeout(() => {
  // Mensaje sistema operativo
  if (process.platform === "linux") {
    console.log("Tú molas");
  } else if (process.platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (process.platform === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }

  //Información sistema
  console.log(`Cuidado, te quedan ${os.freemem() / 1000000} Mb de RAM libre`);
  console.log(`La versión de tu sistema operativo es ${os.version}`);
  console.log(
    `Tu usuario del sistema operativo es ${
      os.userInfo().username
    } y tu carpeta es ${os.homedir()}`
  );
  console.log(`Éstos son los archivos y carpetas de tu carpeta de usuario:`);
  fs.readdir("C:\\Users\\Raúl Navarro Uribe", (err, archivos) => {
    if (err) {
      console.log("Algo no funciona");
      return;
    }
    for (const archivo of archivos) {
      fs.stat(`C:\\Users\\Raúl Navarro Uribe\\${archivo}`, (err, stats) => {
        if (err) {
          console.log("Algo va mal");
        }
        console.log(
          `${archivo}: ${stats.size} bytes, ${
            fs
              .lstatSync(`C:\\Users\\Raúl Navarro Uribe\\${archivo}`)
              .isDirectory()
              ? "Directory"
              : "File"
          }`
        );
      });
    }
  });
}, 2000);
