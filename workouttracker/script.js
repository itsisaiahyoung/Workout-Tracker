function addExercise() {
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
  
    const tableBody = document.getElementById("table-body");
    const newRow = tableBody.insertRow();
    const exerciseCell = newRow.insertCell(0);
    const setsCell = newRow.insertCell(1);
    const repsCell = newRow.insertCell(2);
  
    exerciseCell.innerHTML = exercise;
    setsCell.innerHTML = sets;
    repsCell.innerHTML = reps;
  }