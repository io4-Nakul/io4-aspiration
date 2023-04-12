const car = {
    make: "Maruti",
    model: "Swift",
    year: 2022,
    color: "White",
    isRunning: false,
  
    start: function() {
      this.isRunning = true;
    },
  
    stop: function() {
      this.isRunning = false;
    },
  
    getAge: function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  };
  

  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);
  console.log("Color:", car.color);
  console.log("Is Running:", car.isRunning);
  
  
  car.start();
  console.log("Is Running:", car.isRunning);
  
  car.stop();
  console.log("Is Running:", car.isRunning);
  
  console.log("Age of the car:", car.getAge());
  