import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

/**
 * Blank style applied to Boxen.
 */
export const blankBoxenStyle = {
  borderStyle: {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: " ",
    vertical: " ",
  },
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 },
};

/**
 * Default style applied to Boxen.
 */
export const defaultBoxenStyle = {
  borderColor: "magentaBright",
  borderStyle: "round",
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 },
};

/**
 * Uses Figlet to transform your text to ASCII.
 * @param {String} txt Text to be figlet-itized.
 * @param {Object} options Options object.
 * @returns {Promise} Resolves with text.
 */
const figletPromise = (txt, options) =>
  new Promise((resolve, reject) =>
    figlet.text(txt, options, (error, result) => {
      if (error) {
        return reject(error);
      }

      resolve(result);
    })
  );

/**
 * Displays a title in the center of the terminal.
 * @param {String} title Title to be disaplayed.
 * @returns {Promise} Resolves after logging to the console.
 */
export const titleScreen = (title) =>
  new Promise(async (resolve, reject) => {
    try {
      const text = await figletPromise(title, {
        font: "Slant",
      });

      clear();
      console.log(boxen(chalk.blueBright(text), defaultBoxenStyle));
      resolve();
    } catch (e) {
      reject(e);
    }
  });

export default titleScreen;
