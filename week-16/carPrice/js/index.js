function calculate() {
  let rate = 1;
  let service = 1;
  let carPrice = document.getElementById("carPrice").value;
  carPrice = parseInt(carPrice);
  let brand = document.getElementById("brand").value;
  let entireCar = document.getElementById("entireCar").value;
  let constructorCar = document.getElementById("constructorCar").value;
  let spareParts = document.getElementById("spareParts").value;
  if (brand.value == brandToyota.value) {
    rate = 2;
  }
  if (brand == brandAudi.value) {
    rate = 3;
  }
  if (brand == brandSkoda.value) {
    rate = 4;
  }
  if (brand == brandBMW.value) {
    rate = 5;
  }
  if (brand == brandKia.value) {
    rate = 6;
  }
  if (entireCar.value) {
    service = 1;
  }
  if (constructorCar.value) {
    service = 0.5;
  }
  if (spareParts.value) {
    service = 0.3;
  }

  document.getElementById("sum").textContent = carPrice * rate * service;
}
