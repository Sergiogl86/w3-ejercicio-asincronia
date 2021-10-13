const userId = (name) =>
  new Promise((resolve, reject) => {
    const retrasoId = setTimeout(() => {
      if (name === "Luis") {
        reject({
          error: true,
          message: "I'm sick of you!",
        });
      }

      resolve({
        error: false,
        value: "-wheeeeeeyyy!!!",
      });
    }, 2000);
  });

/*userId("Luis")
  .then((name) => console.log(name.value))
  .catch((name) => console.log(name.message));*/

export default userId;
