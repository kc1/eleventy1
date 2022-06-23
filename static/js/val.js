    $('form').validate({
        rules: {
            contact_name: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            contact_address: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            contact_email: {
              required: true,
              email: true
            },
             contact_phone: {
                 required: true,
                 phoneUS: true
              },
              prop_address: {
                minlength: 3,
               required: true
              },
                Street: {
                required: true
              },
                  City: {
                required: true
              },
                  State: {
                required: true
              },
                  Zip: {
                zipcodeUS: true
              }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    //callback handler for form submit

//  $(".modal").on("hidden.bs.modal", function () {
//
//   console.log("MODAL CLOSED")  // sanity check
//   window.location = "/consult/";
// });



    $("#form").on('submit', function(event)
    {

        event.preventDefault(); //STOP default action
        //event.unbind(); //unbind. to stop multiple form submit.
        console.log($("#form").valid())  // sanity check
        //if ($("#form_id").valid()){console.log("VALID");}

        if ($("#form").valid()) {

            console.log("form submitted!")  // sanity check

            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data, textStatus, jqXHR)
                {
                    console.log("in success!")
                    $('#thanksModal').modal('show');
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    //if fails
                }
            });

        } else {

            console.log("form NOT submitted!")  // sanity check

        }


    });



