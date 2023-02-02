import axios from "axios";

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get("https://icanhazdadjoke.com", config);
    const {
      data: { joke },
    } = res;
    document.getElementById("joke").innerHTML = joke;
  } catch (error) {
    console.error(error.message);
  }
  return "I don't trust stairs because they're always up to something, and I don't trust lifts because they let you down.";
};

export default generateJoke;
