/*document.addEventListener('DOMContentLoaded', function () {*/
    const loader = document.getElementById('loader');

    // Function to show loader
    function showLoader() {
        loader.style.display = 'flex';
    }
    // Function to hide loader
    function hideLoader() {
        loader.style.display = 'none';
    }
    function fetchApiData(website_name) {

    var packageType = "free-widget";
    var arrDetails = {
        'name': username,
        'email': useremail,
        'company_name': '',
        'website': website_name,
        'package_type': packageType,
        'start_date': new Date().toISOString(),
        'end_date': '',
        'price': '',
        'discount_price': '0',
        'platform': 'Akeneo',
        'api_key': '',
        'is_trial_period': '',
        'is_free_widget': '1',
        'bill_address': '',
        'country': '',
        'state': '',
        'city': '',
        'post_code': '',
        'transaction_id': '',
        'subscr_id': '',
        'payment_source': ''
    };

    const apiUrl = "https://ada.skynettechnologies.us/api/get-autologin-link-new";

    // Prepare the POST request
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Specify the content type
        },
        body: JSON.stringify({ website: website_name }) // Pass the encoded domain name in the request body
    })
        .then(response => {
            // Check if the response is okay (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(result => {
            // Log the result to check the response structur

            // Check if the response contains a valid link
            if (result && result.link) {
                console.log("Autologin Link:", result.link);  // Log the link
            } else {
                console.error("Invalid response or missing link.");
                const secondApiUrl = "https://ada.skynettechnologies.us/api/add-user-domain";

                // Send the details to the second API
                fetch(secondApiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Specify the content type
                    },
                    body: JSON.stringify(arrDetails) // Pass the array data to the second API
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle the response from the add-user-domain API (success/failure)
                        if (data.success) {
                        } else {
                            console.error("Error adding user domain.");
                        }
                    })
                    .catch(error => {
                        console.error("Error sending data to add-user-domain API:", error);
                    })
                    .finally(() => {
                        // Hide loader after fetching data is complete (success or error)
                        hideLoader();
                    });
            }
        })
        .catch(error => {
            console.error("Error fetching API:", error); // Log any errors
        });
}
    // Function to populate form fields dynamically from fetched settings
    function setWidgetData(widgetPosition, widgetColor, iconType, iconSize, widgetSize, widgetIconSizeCustom, widgetPositionTop, widgetPositionBottom, widgetPositionLeft, widgetPositionRight) {
        if (widgetColor) {
            const colorInput = document.getElementById("color");
            const colorPicker = document.getElementById("colorpicker");
            colorInput.value = widgetColor;
            colorPicker.value = widgetColor;
        }
        if (widgetPosition) {
            const positionRadio = document.querySelector(`.aioa-position[value="${widgetPosition}"]`);
            if (positionRadio) {
                positionRadio.checked = true;
            }
        }
        if (iconType) {
            const iconRadio = document.querySelector(`.icon_type[value="${iconType}"]`);
            if (iconRadio) {
                iconRadio.checked = true;
                const iconImg = "https://www.skynettechnologies.com/sites/default/files/" + iconType + ".svg";
                $(".iconimg").attr("src", iconImg);
            }
        }
        if (iconSize) {
            const iconSizeRadio = document.querySelector(`.aioa-iconsize[value="${iconSize}"]`);
            if (iconSizeRadio) {
                iconSizeRadio.checked = true;
            }
        }
        if (widgetSize) {
            const widgetSizeRadio = document.querySelector(`input[name="widget_size"][value="${widgetSize}"]`);
            if (widgetSizeRadio) {
                widgetSizeRadio.checked = true;
            }
        }
    
        if (widgetIconSizeCustom !== undefined && widgetIconSizeCustom !== "") {
            const iconSizeCustomInput = document.getElementById("widget_icon_size_custom");
            if (iconSizeCustomInput) {
                iconSizeCustomInput.value = widgetIconSizeCustom; // Set the custom size
            }
        }
        // if (widgetIconSizeCustom !== undefined && widgetIconSizeCustom !== "") {
        //     if (widgetIconSizeCustom == 0) {
        //         // Directly check the radio button for custom position 0
        //         document.querySelector(`#edit-is-widget-custom-position-0`).checked = true;
        //         position_options(0); // Call function to show/hide sections
        //     } else {
        //         // Directly check the radio button for custom position 1
        //         document.querySelector(`#edit-is-widget-custom-position-1`).checked = true;
        //         position_options(1); // Call function to show/hide sections
        //     }
        // }
        // Set Horizontal Position: Left / Right
        if (widgetPositionLeft !== undefined && widgetPositionLeft !== "") {
            const positionHorizontal = document.querySelector('[name="aioa_custom_position_horizontal"]');
            if (positionHorizontal) {
                positionHorizontal.value = widgetPositionLeft;
            }

            const positionHorizontalType = document.querySelector('[name="aioa_custom_position_horizontal_type"]');
            if (positionHorizontalType) {
                positionHorizontalType.value = "left";
            }
        }

        if (widgetPositionRight !== undefined && widgetPositionRight !== "") {
            const positionHorizontal = document.querySelector('[name="aioa_custom_position_horizontal"]');
            if (positionHorizontal) {
                positionHorizontal.value = widgetPositionRight;
            }

            const positionHorizontalType = document.querySelector('[name="aioa_custom_position_horizontal_type"]');
            if (positionHorizontalType) {
                positionHorizontalType.value = "right";
            }
        }

        // Set Vertical Position: Top / Bottom
        if (widgetPositionTop !== undefined && widgetPositionTop !== "") {
            const positionVerticalType = document.querySelector('[name="aioa_custom_position_vertical_type"]');
            if (positionVerticalType) {
                positionVerticalType.value = "top";
            }
            const widgetPositionBottom = document.getElementById('widget_position_bottom');
            if (widgetPositionBottom) widgetPositionBottom.value = "";
        }

        if (widgetPositionBottom !== undefined && widgetPositionBottom !== "") {
            const positionVerticalType = document.querySelector('[name="aioa_custom_position_vertical_type"]');
            if (positionVerticalType) {
                positionVerticalType.value = "bottom";
            }
            const widgetPositionTop = document.getElementById('widget_position_top');
            if (widgetPositionTop) widgetPositionTop.value = "";
        }

        // Select correct option for Horizontal Position (Left or Right)
        if (widgetPositionLeft || widgetPositionRight) {
            const positionHorizontalTypeSelect = document.querySelector('[name="aioa_custom_position_horizontal_type"]');
            if (positionHorizontalTypeSelect) {
                const options = positionHorizontalTypeSelect.querySelectorAll('option');
                options.forEach(option => {
                    if (widgetPositionLeft && option.value === "left") {
                        option.selected = true;
                    }
                    if (widgetPositionRight && option.value === "right") {
                        option.selected = true;
                    }
                });
            }
        }

        // Select correct option for Vertical Position (Top or Bottom)
        if (widgetPositionTop || widgetPositionBottom) {
            const positionVerticalTypeSelect = document.querySelector('[name="aioa_custom_position_vertical_type"]');
            if (positionVerticalTypeSelect) {
                const options = positionVerticalTypeSelect.querySelectorAll('option');
                options.forEach(option => {
                    if (widgetPositionTop && option.value === "top") {
                        option.selected = true;
                    }
                    if (widgetPositionBottom && option.value === "bottom") {
                        option.selected = true;
                    }
                });
            }
        }
        const positionHorizontalTextBox = document.querySelector('[name="aioa_custom_position_horizontal"]');
        if (positionHorizontalTextBox) {
            const positionHorizontalTextBox = document.querySelector('[name="aioa_custom_position_horizontal"]');
            var custom_position_horizontal_type = document.querySelector('select[name="aioa_custom_position_horizontal_type"]').value;
            if(custom_position_horizontal_type=='left'){
                positionHorizontalTextBox.value = widgetPositionLeft;
            }
            else if(custom_position_horizontal_type=='right') {
                positionHorizontalTextBox.value = widgetPositionRight;
            }
        }

        const positionVerticalTextBox = document.querySelector('[name="aioa_custom_position_vertical"]');
        if (positionVerticalTextBox) {
            const positionVerticalTextBox = document.querySelector('[name="aioa_custom_position_vertical"]');
            var custom_position_vertical_type = document.querySelector('select[name="aioa_custom_position_vertical_type"]').value;
            if(custom_position_vertical_type=='bottom'){
                positionVerticalTextBox.value = widgetPositionBottom;
            }
            else if(custom_position_vertical_type=='top') {
                positionVerticalTextBox.value = widgetPositionTop;
            }
        }
        
    }
    var is_widget_custom_position = document.querySelector('input[name="is_widget_custom_position"]:checked')?.value;
     if (is_widget_custom_position) {
        is_widget_custom_position.checked = true;
     }
    const defaultValues = {
        widgetPosition: 'bottom_right',
        widgetColor: '#420083',
        iconType: 'aioa-icon-type-1',
        iconSize: 'aioa-default-icon',
        widgetSize: '',
        widgetIconSizeCustom: '20',
        widgetPositionTop: 0,
        widgetPositionBottom: 0,
        widgetPositionLeft: 0,
        widgetPositionRight: 0,
    };
    // Ensure both elements exist before accessing their innerHTML


    //const domain_name = window.location.host; //window.location.host;
    const domain_name = window.location.hostname;
    const username = domain_name;
    function hostnameToEmail(hostname = window.location.hostname) {
        const cleanedDomain = hostname.replace(/^www\./, '');
        const localPart = hostname.replace(/[^a-zA-Z0-9]/g, '_');
        return `${localPart}@${cleanedDomain}`;
    }
    const useremail = hostnameToEmail();
    if (domain_name && domain_name !== '') {
        // Show loader before fetching data
        showLoader();

        website_name = btoa(domain_name);
        /*fetchApiResponse(domain_name);*/
        //fetchApiData(website_name);
        Promise.all([fetchApiData(website_name)]).then(() => {
            // If domain_name is present, fetch from the external API
            const apiUrl = "https://ada.skynettechnologies.us/api/widget-settings";   // Fetch Widget Data from the Dashboard
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    website_url: domain_name
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json(); // Parse JSON response
                })
                .then((data) => {
                    // Extract widget position and other settings from the API response
                    const widgetPosition = data.Data?.widget_position || defaultValues.widgetPosition;
                    const widgetColor = data.Data?.widget_color_code || defaultValues.widgetColor;
                    const iconType = data.Data?.widget_icon_type || defaultValues.iconType;
                    const iconSize = data.Data?.widget_icon_size || defaultValues.iconSize;
                    const widgetSize = data.Data?.widget_size || defaultValues.widgetSize;
                    const widgetIconSizeCustom = data.Data?.widget_icon_size_custom || defaultValues.widgetIconSizeCustom;
                    const widgetPositionTop = data.Data?.widget_position_top ?? defaultValues.widgetPositionTop;
                    const widgetPositionBottom = data.Data?.widget_position_bottom ?? defaultValues.widgetPositionBottom;
                    const widgetPositionLeft = data.Data?.widget_position_left ?? defaultValues.widgetPositionLeft;
                    const widgetPositionRight = data.Data?.widget_position_right ?? defaultValues.widgetPositionRight;
                    setWidgetData(
                        widgetPosition,
                        widgetColor,
                        iconType,
                        iconSize,
                        widgetSize,
                        widgetIconSizeCustom,
                        widgetPositionTop,
                        widgetPositionBottom,
                        widgetPositionLeft,
                        widgetPositionRight
                    );
                })
                .catch((error) => {
                    console.error("Error fetching widget position:", error);
                })
                .finally(() => {
                    // Hide loader after fetching data is complete (success or error)
                    hideLoader();
                });
        }).catch(error => {
            // Handle any errors
            console.error("Error during API fetch:", error);
            //hideLoader(); // Ensure loader is hidden even in case of an error
        });
    }
    else {
            // If domain_name is not valid, set default values
            setWidgetData(
                defaultValues.widgetPosition,
                defaultValues.widgetColor,
                defaultValues.iconType,
                defaultValues.iconSize,
                defaultValues.widgetSize,
                defaultValues.widgetIconSizeCustom,
                defaultValues.widgetPositionTop,
                defaultValues.widgetPositionBottom,
                defaultValues.widgetPositionLeft,
                defaultValues.widgetPositionRight
            );
        }

    $('.colorpicker').on('input', function () {
        $('.colorint').val(this.value);
    });
    $('.colorint').on('input', function () {
        $('.colorpicker').val(this.value);
    });

    $(".icon_type").change(function () {
        var icon_type = $(this).val(); // Get the selected icon type value
        var iconImg = "https://www.skynettechnologies.com/sites/default/files/" + icon_type + ".svg";
        $(".iconimg").attr("src", iconImg); // Update the icon image source
    });

    document.getElementById('form-module').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        // Collect form data
        document.getElementById('loader').style.display = 'flex';
        var color = document.getElementById("color").value;
        var positionVal = document.querySelector('.aioa-position:checked').value;
        var icon_typeVal = document.querySelector('.icon_type:checked').value;
        var icon_sizeVal = document.querySelector('.aioa-iconsize:checked').value;
        // var is_widget_custom_position = document.querySelector('input[name="is_widget_custom_position"]:checked').value;

        var custom_position_horizontal = document.querySelector('input[name="aioa_custom_position_horizontal"]').value;
        var custom_position_vertical = document.querySelector('input[name="aioa_custom_position_vertical"]').value;
        var custom_position_horizontal_type = document.querySelector('select[name="aioa_custom_position_horizontal_type"]').value;
        var custom_position_vertical_type = document.querySelector('select[name="aioa_custom_position_vertical_type"]').value;
        var widget_size = document.querySelector('.select-widget-size:checked').value;

        var widget_position_left=(custom_position_horizontal_type==="left")?custom_position_horizontal:"";
        var widget_position_right=(custom_position_horizontal_type==="right")?custom_position_horizontal:"";
        var widget_position_top=(custom_position_vertical_type==="top")?custom_position_vertical:"";
        var widget_position_bottom=(custom_position_vertical_type==="bottom")?custom_position_vertical:"";

        var is_widget_custom_size = document.querySelector('.select-widget_custom_size:checked') ? document.querySelector('.select-widget_custom_size:checked').value : '';
        var widget_icon_size_custom = document.getElementById("widget_icon_size_custom") ? document.getElementById("widget_icon_size_custom").value : '';
        var user_name = document.getElementById("user_name").value;  // You could also dynamically set this from JS
        var email = document.getElementById("email").value;


        var  domain_name = window.location.host;//window.location.host;
        var params = new URLSearchParams();
        params.append('u', domain_name);
        params.append('widget_position', positionVal);
        params.append('widget_color_code', color);
        params.append('widget_icon_type', icon_typeVal);
        params.append('widget_icon_size', icon_sizeVal);
        // params.append('is_widget_custom_position', is_widget_custom_position);
        params.append('widget_position_left', widget_position_left);
        params.append('widget_position_top', widget_position_top);
        params.append('widget_position_right', widget_position_right);
        params.append('widget_position_bottom', widget_position_bottom);
        params.append('widget_size', widget_size);
        // params.append('is_widget_custom_size', is_widget_custom_size);
        params.append('widget_icon_size_custom', widget_icon_size_custom);
        // Send the request using the fetch API to the external API
        const requestOptions = {
            method: "POST",
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Ensure the body is sent as URL-encoded
            },
            redirect: "follow"
        };
        fetch('https://ada.skynettechnologies.us/api/widget-setting-update-platform', requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                if (result && result.status === 'success') {
                    // console.log('Response from external API:', result);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                // Hide the loader after the form is submitted
                document.getElementById('loader').style.display = 'none';
                alert("Widget Settings saved successfully!!!");
            });
    });

    const sizeOptions = document.querySelectorAll('input[name="icon_size"]');
    const sizeOptionsImg = document.querySelectorAll('input[name="icon_size"] + label img');
    const typeOptions = document.querySelectorAll('input[name="icon_type"]');

    sizeOptionsImg.forEach(option2 => {
        var ico_type = document.querySelector('input[name="icon_type"]:checked').value;
        option2.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
    });

    typeOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            sizeOptionsImg.forEach(option2 => {
                var ico_type = document.querySelector('input[name="icon_type"]:checked').value;
                option2.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
            });
        });
    });

    function position_options(a) {
        if (a == 0) {
            document.querySelector('.edit-is-widget-custom-position-1').style.display = "none";
            document.querySelector('.edit-is-widget-custom-position-0').style.display = "block";
        } else {
            document.querySelector('.edit-is-widget-custom-position-0').style.display = "none";
            document.querySelector('.edit-is-widget-custom-position-1').style.display = "block";
        }
    }
    position_options(document.querySelector('input[name="is_widget_custom_position"]:checked').value);
    const positionOptions = document.querySelectorAll('input[name="is_widget_custom_position"]');
    positionOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            position_options(event.target.value);
            // Add your custom logic here
        });
    });


    function size_options(a) {
        if (a == 0) {
            document.querySelector('.edit-is-widget-custom-size-1').style.display = "none";
            document.querySelector('.edit-is-widget-custom-size-0').style.display = "block";
        } else {
            document.querySelector('.edit-is-widget-custom-size-0').style.display = "none";
            document.querySelector('.edit-is-widget-custom-size-1').style.display = "block";
        }
    }
    size_options(document.querySelector('input[name="is_widget_custom_size"]:checked').value);
    const widgetIconSizeOptions = document.querySelectorAll('input[name="is_widget_custom_size"]');
    widgetIconSizeOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            size_options(event.target.value);
            // Add your custom logic here
        });
    });
/*});*/
