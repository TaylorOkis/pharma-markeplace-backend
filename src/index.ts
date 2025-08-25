import app from "./app";

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(`An error occurred while starting app\n ${error}`);
  }
};

start();
