var form = document.getElementById("myForm");
document.getElementById("submit").disabled = true;
      form.addEventListener("submit", submitted);
      form.addEventListener("reset", resetForm);

      function resetForm(e) {
        e.target.reset();
        dynamicCB.style.display = "none";
        additionalCustom.style.display = "none";
      }
      const titles = document.querySelectorAll('input[name="title"]');
      var validFirstName = false;
      var validLastName = false;
      var validEmail = false;
      var validPhone = false;
      var validStreet = false;
      var validCity = false;
      var validState = false;
      var validZipCode = false;
      var validSource1 = false;
      var validSource2 = false;
      var validSource3 = false;
      var validBool = true;
      var validDrinks = false;
      var validComments = false;
      var validTitleBool = false;

      // regex checks variables
      var regExFirstName = /^[a-zA-Z]{3,15}$/;
      var regExLastName = /^[A-Za-z-']{3,15}$/;
      var regExEmail = /^[a-zA-Z0-9._-]+@northeastern.edu+$/;
      var addressRegex = /^[a-zA-Z0-9\s,]{5,30}$/;
      var addressRegex2 = /^[a-zA-Z0-9\s,]{0,30}$/;
      var cityRegex = /^[a-zA-Z\s-]{3,20}$/;
      var stateRegex = /^[a-zA-Z\s-]{2,20}$/;
      var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
      var regExZipcode = /\d{5}/;
      var commentRegex = /^[\s\S]{4,30}$/

      var firstName = document.getElementById("firstName");
      firstName.addEventListener("input", validate);

      var lastName = document.getElementById("lastName");
      lastName.addEventListener("input", validate);

      var emailId = document.getElementById("emailId");
      emailId.addEventListener("input", validate);

      var phoneNumber = document.getElementById("phoneNumber");
      phoneNumber.addEventListener("input", validate);

      var streetAddress1 = document.getElementById("streetAddress1");
      streetAddress1.addEventListener("input", validate);

      var streetAddress2 = document.getElementById("streetAddress2");
      streetAddress2.addEventListener("input", validate);

      var city = document.getElementById("city");
      city.addEventListener("input", validate);

      var state = document.getElementById("state");
      state.addEventListener("input", validate);

      var zipcode = document.getElementById("zipcode");
      zipcode.addEventListener("input", validate);

      var source1 = document.getElementById("source1");
      source1.addEventListener("input", validate);

      var source2 = document.getElementById("source2");
      source2.addEventListener("input", validate);

      var source3 = document.getElementById("source3");
      source3.addEventListener("input", validate);

      var comments = document.getElementById("comments");
      comments.addEventListener("input", validate);

      var customisation = document.getElementById("customisation");
      customisation.addEventListener("input", validate);

      //we need to write a function for validate
      function validate(e) {
        var value = e.target.value;
        var type = this.id;
        if(type=="source1"|| type=="source2"|| type=="source3"){
          var em ="error_" + "source";
        }
        else{
          var em = "error_" + type;
        }

        
        const checkboxes = document.querySelectorAll('input[name="source"]');

        checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
        // Uncheck all other checkboxes when one is checked
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                  }
               });
          }
         });
        });


        switch (type) {
          case "firstName":
            if (!value.trim().match(regExFirstName)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validFirstName = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validFirstName = true;
              enableCheck();
            }
            break;
          case "lastName":
            if (!value.trim().match(regExLastName)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validLastName = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validLastName = true;
              enableCheck();
            }
            break;
          case "emailId":
            if (!value.trim().match(regExEmail)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validEmail = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validEmail = true;
              enableCheck();
            }
            break;
          case "phoneNumber":
            if (!value.trim().match(regExPhone)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validPhone = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validPhone = true;
              enableCheck();
            }
            break;
          case "streetAddress1":
            if (!value.trim().match(addressRegex)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validStreet = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validStreet = true;
              enableCheck();
            }
            break;

          case "streetAddress2":
            if (!value.trim().match(addressRegex2)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
            }
            break;
          case "city":
            if (!value.trim().match(cityRegex)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validCity = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validCity = true;
              enableCheck();
            }
            break;
          case "state":
            if (!value.trim().match(stateRegex)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validState = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validState = true;
              enableCheck();
            }
            break;
          case "zipcode":
            if (!value.trim().match(regExZipcode)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validZipCode = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validZipCode = true;
              enableCheck();
            }
            break;
            case "source1":
              var getSelectedValue = document.querySelector( 'input[name="source"]:checked');   
              if(getSelectedValue != null) {   
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validSource1 = true;
                enableCheck();
               } 
              else {  
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validSource1 = false;
                }
                break;
            case "source2":
              var getSelectedValue = document.querySelector( 'input[name="source"]:checked');   
              if(getSelectedValue != null) {   
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validSource2 = true;
                enableCheck();
               } 
              else {  
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validSource2 = false;
                }
            break;
            case "source3":
              var getSelectedValue = document.querySelector( 'input[name="source"]:checked');   
              if(getSelectedValue != null) {   
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validSource3 = true;
                enableCheck();
               } 
              else {  
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validSource3 = false;
                }
                break;
          case "comments":
            if (!value.trim().match(commentRegex)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validComments = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validComments = true;
              enableCheck();
            }
            break;
        }
      }
function enableCheck(){
  if (
    validFirstName &&
    validLastName &&
    validEmail &&
    validPhone &&
    validStreet &&
    validCity &&
    validState &&
    validZipCode &&
    (validSource1 || validSource2 || validSource3) &&
    validDrinks &&
    validComments&&
    validBool
  ) {
    document.getElementById("submit").disabled = false;
  }
}
      
      //drinkSelected function
      const myDrinkList = document.getElementById("myDrinkList");
      var additionalCustom = document.getElementById("additionalCustom");
      const dynamicCB = document.getElementById("dynamicCB");
      //var customisation = document.getElementById("customisation");

      dynamicCB.style.display = "none";
      additionalCustom.style.display = "none";

      dynamicCB.innerHTML = "";

      myDrinkList.onchange = (e) => {
        if (e.target.value == "Hot Black Tea") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Hot Black Tea - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox1" name="source" value="Hot Black Tea" />
            <br><br>
            `;

          const messageCB1 = document.getElementById("checkbox1");

          messageCB1.addEventListener("click", () => {
            if (messageCB1.checked) {
              additionalCustom.style.display = "block";
            //   if (customisation.value.length == 0) {
            //     validBool = false;
            //   } else {
            //     customisation.value = "";
            //     validBool = true;
            //   }
            // }  case "customisation":
            if (!value.trim().match(commentRegex)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validBool = false;
              validCustom=false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validBool = true;
              validCustom=true;
              enableCheck();
            }
            //   else {
            //   additionalCustom.style.display = "none";
            //   validBool = true;
            // 
          }
          });
        } else if (e.target.value == "Cold Coffee") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Cold Coffee - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox2" name="source" value="Cold Coffee" />
            <br><br>
            `;

          const messageCB2 = document.getElementById("checkbox2");

          messageCB2.addEventListener("click", () => {
            if (messageCB2.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Lemon Iced Tea") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Lemon Iced Tea - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox3" name="source" value="Lemon Iced Tea" />
            <br><br>
            `;

          const messageCB3 = document.getElementById("checkbox3");

          messageCB3.addEventListener("click", () => {
            if (messageCB3.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Expresso") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Expresso - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox4" name="source" value="Expresso" />
            <br><br>
            `;

          const messageCB4 = document.getElementById("checkbox4");

          messageCB4.addEventListener("click", () => {
            if (messageCB4.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Latte") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Latte - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox5" name="source" value="Latte" />
            <br><br>
            `;

          const messageCB5 = document.getElementById("checkbox5");

          messageCB5.addEventListener("click", () => {
            if (messageCB5.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else {
          dynamicCB.style.display = "none";
          additionalCustom.style.display = "none";
          validDrinks = false;
        }
      };

      function submitted(e) {
        let title;
        for (let i = 0; i < titles.length; i++) {
          if (titles[i].checked) {
            validTitleBool = true;
            title = titles[i].value;
          }
        }
        e.preventDefault();
        console.log(validBool, customisation.value.length);
        if (validBool == false && customisation.value.length != 0) {
          validBool = true;
        }
        if (
          validFirstName &&
          validLastName &&
          validEmail &&
          validPhone &&
          validStreet &&
          validCity &&
          validState &&
          validZipCode &&
          (validSource1 || validSource2 || validSource3) &&
          validDrinks &&
          validBool &&
          validComments
        ) {
          document.getElementById("submit").disabled = false;
        var idSource = document.querySelector( 'input[name="source"]:checked').id;
          tableData.innerHTML += `
      	<tr>
      		<td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
            document.getElementById("firstName").value
          } ${document.getElementById("lastName").value}</td>
      		<td>${document.getElementById("emailId").value}</td>
      		<td>${document.getElementById("phoneNumber").value}</td>
      		<td>${document.getElementById("streetAddress1").value}</td>
      		<td>${document.getElementById("streetAddress2").value}</td>
      		<td>${document.getElementById("city").value}</td>
      		<td>${document.getElementById("state").value}</td>
      		<td>${document.getElementById("zipcode").value}</td>
          <td>${document.getElementById(idSource).value}</td>
      		<td>${document.getElementById("myDrinkList").value}</td>
      		<td>${document.getElementById("customisation").value}</td>
      		<td>${document.getElementById("comments").value}</td>
      	</tr>
      	`;
          alert("Data is saved succesfully");
          e.target.reset();
          dynamicCB.style.display = "none";
          additionalCustom.style.display = "none";
        } else if (validFirstName == false) {
          alert("Please enter first name");
        } else if (validLastName == false) {
          alert("Please enter last name");
        } else if (validEmail == false) {
          alert("Please enter email");
        } else if (validPhone == false) {
          alert("Please enter phone number");
        } else if (validStreet == false) {
          alert("Please enter street address");
        } else if (validCity == false) {
          alert("Please enter city");
        } else if (validState == false) {
          alert("Please enter state");
        } else if (validZipCode == false) {
          alert("Please enter zipcode");
        } else if (validSource1 == false || validSource2==false || validSource3==false) {
          alert("Please check how did you hear about us");
        } else if (validDrinks == false) {
          alert("Please select drinks");
        } else if (validBool == false) {
          alert("Please enter additional comments");
        } else if (validComments == false) {
          alert("Please enter comments");
        } else {
          alert("Enter proper data");
        }
      }