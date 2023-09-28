//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};


var t = new Title("CONNECT WITH ME!");

const table = document.getElementById("myTable");

let countBoxPresent = 0;

let count = 0

const checkRows = table.getElementsByTagName("input");
hideOnStart();

function hideOnStart() {
  var count = 0;
  let submitBtn = document.getElementById("button");
  for (var i = 0; i < checkRows.length; i++) {
    var row = checkRows[i].parentNode.parentNode;

    if (!checkRows[i].checked) {
      count++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }

    if (checkRows.length === count) {
      submitBtn.style.backgroundColor = "gray";
      submitBtn.style.border = "";
      submitBtn.style.cursor = "initial";
      submitBtn.disabled = true;
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[8]
        .classList.add("columnHide");
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[9]
        .classList.add("columnHide");
    }
  }
}

// selectRow();

let boolean = true;

let mainRetoric = true; //boolean values

function rowOne(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling;
  if (mainRetoric) {
    descRow.style.display = "table-row";
    mainRetoric = false;
  } else {
    descRow.style.display = "none";
    mainRetoric = true;
  }
}

function rowTwo(r) {
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling;
  if (boolean) {
    descRow.style.display = "table-row";
    boolean = false;
  } else {
    descRow.style.display = "none";
    boolean = true;
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  var studentName = r.parentNode.parentNode.cells[1].textContent;

  if(confirm(`Do you want to delete ${studentName} record?`)) {
    document.getElementById("myTable").deleteRow(i);
    alert(`Record of ${studentName} deleted successfully..!!`);
    countBoxPresent--
    hideOnStart();
    if(!countBoxPresent) {
      document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[8]
      .classList.add("columnHide");
    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[9]
      .classList.add("columnHide");
    } 
  }
  // selectRow();
}

function editRow(r) {
  const rowCount = table.rows.length;
  var studentName = r.parentNode.parentNode.cells[1].textContent;
  prompt("Edit the details.");
  alert(`Record edited successfully for ${studentName}`);
  // selectRow();
}

function addRow(check) {
  count+=1
  const row = table.insertRow(table.rows.length);
  // const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input onclick=selectRow(this,event) type="checkbox" /><br /><br /><img onClick="rowOne(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${count}`;
  advisor.innerHTML = `Teacher ${count}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  if(check) {
    try {
      setTimeout(() => {
        alert(`Next Student Added ${count}`);
      }, 100);
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  // selectRow();

  nextRowAddition();
  hideOnStart();
}



window.addEventListener("click", () => {
  let submitBtn = document.getElementById("button");

  if (countBoxPresent > 0) {
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
});

function nextRowAddition() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea");

  row.innerHTML =
    '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  // selectRow();
}

var rowname;
// selectRow();

function selectRow(event) {
  // for (let i = 0; i < checkRows.length; i++) {
    const row = event.parentNode.parentNode;
  //   rowname = checkRows;

    // checkRows[i].addEventListener("click", () => {
      if (event.checked) {
        countBoxPresent++;
        row.style.backgroundColor = "yellow";
        row.lastElementChild.innerHTML =
          "<td><button onClick='editRow(this)'>Edit Row</button></td>";
        row.lastElementChild.previousElementSibling.innerHTML =
          "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[8]
          .classList.remove("columnHide");
        document
          .querySelectorAll("tr")[0]
          .querySelectorAll("th")[9]
          .classList.remove("columnHide");
        row.querySelectorAll("td")[8].classList.remove("columnHide");
        row.querySelectorAll("td")[9].classList.remove("columnHide");
      } else {
        countBoxPresent--;
        row.style.backgroundColor = "white";
        row.lastElementChild.innerHTML = "";
        row.lastElementChild.previousElementSibling.innerHTML = "";

        if(!countBoxPresent) {
          document
            .querySelectorAll("tr")[0]
            .querySelectorAll("th")[8]
            .classList.add("columnHide");
          document
            .querySelectorAll("tr")[0]
            .querySelectorAll("th")[9]
            .classList.add("columnHide");
        }
          
        row.querySelectorAll("td")[8].classList.add("columnHide");
        row.querySelectorAll("td")[9].classList.add("columnHide");
      }
    // });
  // }
}

addRow()
addRow()
addRow()