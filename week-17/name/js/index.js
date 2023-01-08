function convert() {
  let fio = document.getElementById("fio").value;
  fio = fio.trim();
  let surname = new String();
  surname = fio.slice(0, fio.indexOf(" "));
  document.getElementById("surname").value =
    surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

  fio = fio.slice(fio.indexOf(" "));
  fio = fio.trim();
  let name = new String();
  name = fio.slice(0, fio.indexOf(" "));
  document.getElementById("name").value =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  fio = fio.slice(fio.indexOf(" "));
  fio = fio.trim();
  let fathersname = new String();
  fathersname = fio;
  document.getElementById("fathersname").value =
    fathersname.charAt(0).toUpperCase() + fathersname.slice(1).toLowerCase();
}
