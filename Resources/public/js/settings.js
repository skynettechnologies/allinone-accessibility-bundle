/*==== Every 10 Seconds ====*/
var addedMenuFlag=false;
setInterval(function() {
  var system_menu = document.querySelector('#pim-menu-system');
  var setting_menu = document.querySelector('#pim-menu-aioa-setting');
  
  if (system_menu && addedMenuFlag==false) {
    addedMenuFlag=true;
    console.log('Setting Json ...');
    /*==== Create Menu Section START ===== */
    // Reference the .footer-menu
    var system_menu = document.querySelector('#pim-menu-system');
    
    // Clone the .footer-menu
    var aioa_settings_meun = system_menu.cloneNode(true);
    aioa_settings_meun.id='pim-menu-aioa-settings'
    const parentElement = system_menu.parentNode;
    const nextSibling = system_menu.nextElementSibling;
    parentElement.insertBefore(aioa_settings_meun, nextSibling);
    
    // Replace SVG
    const newSVG = `
      <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_538_2)"><path d="M256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256C511.84 114.681 397.319 0.159889 256 0ZM256 494.933C124.041 494.933 17.0667 387.959 17.0667 256C17.0667 124.041 124.041 17.0667 256 17.0667C387.959 17.0667 494.933 124.041 494.933 256C494.783 387.897 387.897 494.783 256 494.933Z" fill="#67768A"></path><path d="M256 34.1338C133.467 34.1338 34.1338 133.467 34.1338 256C34.1338 378.534 133.467 477.867 256 477.867C378.534 477.867 477.867 378.534 477.867 256C477.726 133.525 378.476 34.2749 256 34.1338ZM256 460.8C142.893 460.8 51.2005 369.108 51.2005 256C51.2005 142.893 142.893 51.2005 256 51.2005C369.108 51.2005 460.8 142.893 460.8 256C460.669 369.054 369.054 460.669 256 460.8Z" fill="#67768A"></path><path d="M256 179.2C284.277 179.2 307.2 156.277 307.2 128C307.2 99.7228 284.277 76.7998 256 76.7998C227.723 76.7998 204.8 99.7228 204.8 128C204.828 156.265 227.735 179.172 256 179.2ZM256 93.8665C274.851 93.8665 290.133 109.148 290.133 128C290.133 146.851 274.851 162.133 256 162.133C237.148 162.133 221.866 146.851 221.866 128C221.866 109.148 237.148 93.8665 256 93.8665Z" fill="#67768A"></path><path d="M374.844 187.802H374.707L285.107 195.849C282.052 196.127 278.995 196.267 275.934 196.267H236.066C233.011 196.267 229.959 196.13 226.91 195.857L137.156 187.802C123.06 186.694 110.735 197.223 109.628 211.319C108.52 225.416 119.05 237.74 133.146 238.848L205.568 245.419C209.962 245.816 213.329 249.497 213.333 253.909V273.536C213.336 277.803 212.537 282.032 210.978 286.003L169.916 390.579C164.192 403.511 170.036 418.635 182.968 424.358C195.9 430.082 211.023 424.239 216.747 411.307L255.881 315.622L295.381 411.563C301.272 424.17 316.154 429.763 328.89 424.156C341.626 418.549 347.55 403.796 342.229 390.938L301.022 285.978C299.467 282.011 298.668 277.788 298.667 273.527V253.901C298.671 249.489 302.038 245.807 306.432 245.41L378.735 238.848C392.833 237.773 403.391 225.473 402.317 211.375C401.242 197.276 388.942 186.727 374.844 187.802ZM377.31 221.867L304.888 228.437C291.679 229.574 281.551 240.652 281.6 253.909V273.536C281.597 279.941 282.798 286.289 285.141 292.25L326.494 397.542C328.504 401.805 326.678 406.89 322.415 408.9C318.152 410.91 313.067 409.084 311.057 404.821L271.642 309.137C269.027 302.803 262.852 298.672 256 298.672C249.148 298.672 242.973 302.803 240.358 309.137L201.054 404.565C199.832 407.469 197.109 409.464 193.972 409.753C190.834 410.042 187.793 408.579 186.06 405.947C184.328 403.315 184.187 399.943 185.694 397.175L226.901 292.215C229.229 286.261 230.416 279.921 230.4 273.527V253.901C230.458 240.637 220.327 229.549 207.113 228.412L134.571 221.867C129.858 221.534 126.307 217.445 126.639 212.732C126.971 208.019 131.061 204.468 135.774 204.8L225.374 212.847C228.924 213.165 232.482 213.325 236.049 213.325H275.917C279.484 213.325 283.042 213.165 286.592 212.847L376.149 204.8C378.405 204.621 380.638 205.351 382.352 206.827C384.067 208.303 385.121 210.402 385.28 212.659C385.466 214.942 384.726 217.203 383.227 218.935C381.728 220.667 379.596 221.723 377.31 221.867Z" fill="#67768A"></path></g><defs><clipPath id="clip0_538_2"><rect width="512" height="512" fill="white"></rect></clipPath></defs></svg>
    `;
    
    aioa_settings_meun.href="javascript:void(0);";
    // Replace the existing <svg> with the new one
    const oldSVG = aioa_settings_meun.querySelector('svg');
    if (oldSVG) {
      oldSVG.outerHTML = newSVG;
    }
    
    // Change <span> text
    const span = aioa_settings_meun.querySelector('span');
    if (span) {
      span.textContent = 'All in One Accessibility';
    }
    
    /*==== Create Menu Section END ===== */
    
    /*==== Inject Css/Js START ===== */
     /*const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/public/bundles/skynettechnologiesallinoneaccessibility/css/aioa_style.css'; 
    document.head.appendChild(link); */
    
    const link_bs = document.createElement('link');
    link_bs.rel = 'stylesheet';
    link_bs.href = '/public/bundles/skynettechnologiesallinoneaccessibility/css/allinoneaccessibility.css'; 
    document.head.appendChild(link_bs); 
    
    /*==== Inject Css/Js END ===== */
    
    /*==== Settings Sections START ===== */
    var domain=window.location.hostname;
    var userName='';
    var email='';
    var color='';
    
    var settingModelHTML = `
                <div style="background-color: #e9efff;padding: 20px 0 0 20px;border-radius: 25px;position: relative;max-width: 75%;margin-left: auto;margin-right: auto;max-height: 100%;transform: translateY(-50%);top: 50%;">
                    <button id="aioa-settings-close-button"></button>
                    <div class="aioa-setting-modal-content" style="height: 100%; overflow-y: auto;overflow-x: hidden;padding-bottom: 20px;font-family: Rubik, Noto Sans Meetei Mayek, Roboto, Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;">
                            <div class="panel panel-default aioa-settings-panel">
  <div class="panel-body">
    <form method="POST" enctype="multipart/form-data" id="form-module">
      <input type="hidden" id="settings-isvalid_key" name="isvalid_key" value="">
      <input type="hidden" id="id" name="id" value="0">
      <input type="hidden" id="user_name" name="user_name" value="`+userName+`">
      <input type="hidden" id="email" name="email" value="`+email+`">

    <div class="header-content">
        <h1 class="mb-0 text-black">
            <img src="https://ada.skynettechnologies.us/public/trial-assets/images/all-in-one-accessibility-logo.svg" alt="All in One Accessibility - Skynet Technologies">
        </h1>
    </div>
      <!-- License Key Message -->
      <div class="form-group row mt-0" style="margin-bottom: auto;">
        <div class="col-sm-12">
          <div style="margin-top: 5px;">
            <p id="license_key_msg" class="">
              <strong>Please <a href="https://ada.skynettechnologies.us/trial-subscription?website=`+domain+`"
                target="_blank">Upgrade</a> to paid version of All in One Accessibility Pro.</strong>
            </p>
          </div>
        </div>
      </div>

      <!-- Hex Color Input -->
      <div class="form-group common-class" style="margin-bottom: 3px;">
        <label class="h3" for="color">Hex color code:</label>
        <div class="d-flex" style="max-width: 300px;">
          <input type="text" name="color" value="`+color+`" id="color" class="form-control colorint me-3">
          <input type="color" id="colorpicker" name="colorpicker" class="colorpicker"
            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" value="`+color+`"
            style="height: 40.98px">
        </div>
      </div>

    <div class="form-group">
        <div class="form-radios">
            <h3>Select Position Type:</h3>
            <!-- Fixed Position Radio -->
            <div class="form-radio-item">
                <input type="radio" id="edit-is-widget-custom-position-0" name="is_widget_custom_position" value="0"
                       class="form-radio form-boolean form-boolean--type-radio select-widget-position" checked>
                <label for="edit-is-widget-custom-position-0" class="form-item__label option">Fix Position</label>
            </div>
    
            <!-- Custom Position Radio -->
            <div class="form-radio-item" style="d-none">
                <input type="radio" id="edit-is-widget-custom-position-1" name="is_widget_custom_position" value="1"
                       class="form-radio form-boolean form-boolean--type-radio select-widget-position">
                <label for="edit-is-widget-custom-position-1" class="form-item__label option">Custom Position</label>
            </div>
        </div>
    </div>
      <!-- Position Settings -->
      <div class="form-group edit-is-widget-custom-position-0">
            <fieldset>
            <legend>Where would you like to place the accessibility icon on your site?</legend>
            <div class="icon-position-radios three-col">
            <!-- Top Left -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionTL" class="aioa-position" value="top_left">
                    <label for="aioaPositionTL" style="font-weight:normal !important">Top Left</label>
                </div>
                <!-- Top Center -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionTC" class="aioa-position" value="top_center">
                    <label for="aioaPositionTC" style="font-weight:normal !important">Top Center</label>
                </div>
                <!-- Top Right -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionTR" class="aioa-position" value="top_right">
                    <label for="aioaPositionTR" style="font-weight:normal !important">Top Right</label>
                </div>
                <!-- Bottom Left -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionBL" class="aioa-position" value="bottom_left">
                    <label for="aioaPositionBL" style="font-weight:normal !important">Bottom Left</label>
                </div>
                <!-- Bottom Right -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionBR" class="aioa-position" value="bottom_right" checked>
                    <label for="aioaPositionBR" style="font-weight:normal !important">Bottom Right</label>
                </div>
                <!-- Bottom Center -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionBC" class="aioa-position" value="bottom_center">
                    <label for="aioaPositionBC" style="font-weight:normal !important">Bottom Center</label>
                </div>
                <!-- Middle Left -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionML" class="aioa-position" value="middle_left">
                    <label for="aioaPositionML" style="font-weight:normal !important">Middle Left</label>
                </div>
                <!-- Middle Right -->
                <div class="js-form-item form-item js-form-type-radio form-type-radio js-form-item-position form-item-position">
                    <input type="radio" name="position" id="aioaPositionMR" class="aioa-position" value="middle_right">
                    <label for="aioaPositionMR" style="font-weight:normal !important">Middle Right</label>
                </div>
            </div>
        </fieldset>
    </div>
      
      <!-- Custom Position Options -->
      <div class="form-group edit-is-widget-custom-position-1">
            <fieldset>
                <legend>Custom Position Options:</legend>
                    <div class="fieldset-wrapper">
                        <div class="horizontal-container js-form-wrapper form-wrapper" data-drupal-selector="edit-horizontal" id="edit-horizontal" style="display: flex">
                            <div class="js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-widget-position-left form-item--widget-position-left">
                                <label for="edit-widget-position-left" class="form-label form-item__label" >Horizontal (px)</label>
                                    <input placeholder="Enter pixels" data-drupal-selector="edit-widget-position-left" type="number" id="widget_position_left" name="aioa_custom_position_horizontal" value="" size="10" maxlength="128" class="form-control form-element form-element--type-text form-element--api-textfield" oninput="this.value = Math.min(Math.max(this.value, 0), 250)">
                        </div>
                            <div class="js-form-item form-item js-form-type-select form-type--select js-form-item-widget-position-top form-item--widget-position-top">
                                <label for="edit-widget-position-top" class="form-label form-item__label">Position</label>
                                    <select data-drupal-selector="edit-widget-position-top" id="widget_position_top" name="aioa_custom_position_horizontal_type" class="form-select form-element form-element--type-select select-widget_position_top">
                                        <option value="left" >To the Left</option>
                                        <option value="right" selected>To the Right</option>
                                    </select>
                            </div>
                        </div>
                        <div class="vertical-container js-form-wrapper form-wrapper" data-drupal-selector="edit-vertical" id="edit-vertical" style="display: flex">
                            <div class="js-form-item form-item js-form-type-textfield form-type--textfield js-form-item-widget-position-right form-item--widget-position-right">
                                <label for="edit-widget-position-right" class="form-label form-item__label">Vertical (px)</label>
                                    <!-- Changed class from form-text to form-control to match the style of the Horizontal input -->
                                    <input placeholder="Enter pixels" data-drupal-selector="edit-widget-position-right" type="number" id="widget_position_right" name="aioa_custom_position_vertical" value="" size="10" maxlength="128" class="form-control form-element form-element--type-text form-element--api-textfield" oninput="this.value = Math.min(Math.max(this.value, 0), 250)">
                            </div>
                            <div class="js-form-item form-item js-form-type-select form-type--select js-form-item-widget-position-bottom form-item--widget-position-bottom">
                            <label for="edit-widget-position-bottom" class="form-label form-item__label">Position</label>
                                <select data-drupal-selector="edit-widget-position-bottom" id="widget_position_bottom" name="aioa_custom_position_vertical_type" class="form-select form-element form-element--type-select setting-widget_position_bottom">
                                    <option value="top">To the Top</option>
                                    <option value="bottom" selected>To the Bottom</option>
                                </select>
                            </div>
                        </div>
                            <div id="edit-widget-size--wrapper--description" data-drupal-field-elements="description" class="fieldset__description mt-1">
                                0 - 250px are permitted values.
                        </div>
                    </div>
            </fieldset>
        </div>

      <!-- Widget Size Options -->
      <div class="form-group">
        <div class="form-radios">
          <h3>Select Widget Size:</h3>
          <div class="form-radio-item">
            <input type="radio" id="widget-size-regular" name="widget_size" value="0"
              class="form-radio form-boolean form-boolean--type-radio select-widget-size" checked>
            <label for="widget-size-regular" class="form-item__label">Regular Size</label>
          </div>
          <div class="form-radio-item">
            <input type="radio" id="widget-size-large" name="widget_size" value="1"
              class="form-radio form-boolean form-boolean--type-radio select-widget-size">
            <label for="widget-size-large" class="form-item__label">Oversize</label>
          </div>
        </div>
      </div>
      
        <div class="form-group row icon common-class aioa-icon-type mb-0">
            <h3>Select icon type:</h3>
            <div class="col-sm-12">
              <div class="row">
                <!-- Include your radio buttons here -->
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-1" name="icon_type" value="aioa-icon-type-1" class="input-hidden icon_type" checked>
                  <label for="edit-type-1" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg" width="65" height="65" />
                    <span class="visually-hidden">Type 1</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-2" name="icon_type" value="aioa-icon-type-2" class="input-hidden icon_type">
                  <label for="edit-type-2" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-2.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 2</span>
                  </label>
                </div>
                <div class="col-auto mb-30"> 
                  <input type="radio" id="edit-type-3" name="icon_type" value="aioa-icon-type-3" class="input-hidden icon_type">
                  <label for="edit-type-3" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-3.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 3</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-4" name="icon_type" value="aioa-icon-type-4" class="input-hidden icon_type">
                    <label for="edit-type-4" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-4.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 4</span>
                    </label>
                  </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-5" name="icon_type" value="aioa-icon-type-5" class="input-hidden icon_type">
                    <label for="edit-type-5" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-5.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 5</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-6" name="icon_type" value="aioa-icon-type-6" class="input-hidden icon_type">
                    <label for="edit-type-6" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-6.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 6</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-7" name="icon_type" value="aioa-icon-type-7" class="input-hidden icon_type">
                    <label for="edit-type-7" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-7.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 7</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-8" name="icon_type" value="aioa-icon-type-8" class="input-hidden icon_type">
                    <label for="edit-type-8" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-8.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 8</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-9" name="icon_type" value="aioa-icon-type-9" class="input-hidden icon_type">
                    <label for="edit-type-9" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-9.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 9</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-10" name="icon_type" value="aioa-icon-type-10" class="input-hidden icon_type">
                    <label for="edit-type-10" class="icon-label">
                      <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-10.svg"
                           width="65" height="65" />
                      <span class="visually-hidden">Type 10</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-11" name="icon_type" value="aioa-icon-type-11" class="input-hidden icon_type">
                  <label for="edit-type-11" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-11.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 11</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-12" name="icon_type" value="aioa-icon-type-12" class="input-hidden icon_type">
                  <label for="edit-type-12" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-12.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 12</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-13" name="icon_type" value="aioa-icon-type-13" class="input-hidden icon_type">
                  <label for="edit-type-13" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-13.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 13</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-14" name="icon_type" value="aioa-icon-type-14" class="input-hidden icon_type">
                  <label for="edit-type-14" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-14.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 14</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-15" name="icon_type" value="aioa-icon-type-15" class="input-hidden icon_type">
                  <label for="edit-type-15" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-15.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 15</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-16" name="icon_type" value="aioa-icon-type-16" class="input-hidden icon_type">
                  <label for="edit-type-16" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-16.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 16</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-17" name="icon_type" value="aioa-icon-type-17" class="input-hidden icon_type">
                  <label for="edit-type-17" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-17.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 17</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-18" name="icon_type" value="aioa-icon-type-18" class="input-hidden icon_type">
                  <label for="edit-type-18" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-18.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 18</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-19" name="icon_type" value="aioa-icon-type-19" class="input-hidden icon_type">
                  <label for="edit-type-19" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-19.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 19</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-20" name="icon_type" value="aioa-icon-type-20" class="input-hidden icon_type">
                  <label for="edit-type-20" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-20.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 20</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                  <input type="radio" id="edit-type-21" name="icon_type" value="aioa-icon-type-21" class="input-hidden icon_type">
                  <label for="edit-type-21" class="icon-label">
                    <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-21.svg"
                         width="65" height="65" />
                    <span class="visually-hidden">Type 21</span>
                  </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-22" name="icon_type" value="aioa-icon-type-22" class="input-hidden icon_type">
                    <label for="edit-type-22" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-22.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 22</span>
                    </label>
                </div>
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-23" name="icon_type" value="aioa-icon-type-23" class="input-hidden icon_type">
                    <label for="edit-type-23" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-23.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 23</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-24" name="icon_type" value="aioa-icon-type-24" class="input-hidden icon_type">
                    <label for="edit-type-24" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-24.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 24</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-25" name="icon_type" value="aioa-icon-type-25" class="input-hidden icon_type">
                    <label for="edit-type-25" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-25.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 25</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-26" name="icon_type" value="aioa-icon-type-26" class="input-hidden icon_type">
                    <label for="edit-type-26" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-26.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 26</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-27" name="icon_type" value="aioa-icon-type-27" class="input-hidden icon_type">
                    <label for="edit-type-27" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-27.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 27</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-28" name="icon_type" value="aioa-icon-type-28" class="input-hidden icon_type">
                    <label for="edit-type-28" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-28.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 28</span>
                    </label>
                </div>
                
                <div class="col-auto mb-30">
                    <input type="radio" id="edit-type-29" name="icon_type" value="aioa-icon-type-29" class="input-hidden icon_type">
                    <label for="edit-type-29" class="icon-label">
                        <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-29.svg" width="65" height="65" />
                        <span class="visually-hidden">Type 29</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    
        <!-- Added Fields After Select Icon Type Section -->
        <div class="form-group">
          <div class="form-radio-item">
            <h3>Widget Icon Size for Desktop:</h3>
            <div class="form-radios">
              <div id="edit-is-widget-custom-size" class="form-radio-item">
                <!-- Fixed Icon Size Option -->
                <div class="form-radio-item">
                  <input data-drupal-selector="edit-is-widget-custom-size-0" type="radio" id="edit-is-widget-custom-size-0" name="is_widget_custom_size"
                         value="0" class="form-radio form-boolean form-boolean--type-radio select-widget_custom_size" checked>
                  <label for="edit-is-widget-custom-size-0" class="form-item__label option">Fixed Icon Size</label>
                </div>
                <!-- Custom Icon Size Option -->
                <div class="form-radio-item">
                  <input data-drupal-selector="edit-is-widget-custom-size-1" type="radio" id="edit-is-widget-custom-size-1" name="is_widget_custom_size"
                         value="1" class="form-radio form-boolean form-boolean--type-radio select-widget_custom_size">
                  <label for="edit-is-widget-custom-size-1" class="form-item__label option">Custom Icon Size</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group edit-is-widget-custom-size-1" style="display: none;">
            <h3>Custom Widget Icon Size for Desktop (px):</h3>
            <div>
              <input data-drupal-selector="edit-widget-icon-size-custom" aria-describedby="edit-widget-icon-size-custom--description" type="number" id="widget_icon_size_custom" name="widget_icon_size_custom"
                     value="20" step="1" min="20" max="150" placeholder="20" size="10"
                     class="form-control form-number form-element form-element--type-number form-element--api-number"
                     style="max-width: 85px;" oninput="this.value = Math.max(0, Math.min(this.value, 150))">
              <span id="edit-widget-icon-size-custom--description" class="form-item__description d-block">
                20-150 px are recommended values.
              </span>
            </div>
        </div>

        <div class="form-group row icon common-class edit-is-widget-custom-size-0 mb-0" style="display: none;">
          <h3>Fixed icon size:</h3>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-auto mb-30">
                <input type="radio" id="edit-size-big" name="icon_size" value="aioa-big-icon" class="input-hidden aioa-iconsize">
                <label for="edit-size-big" class="icon-label">
                  <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                       width="75" height="75" style="margin: auto" class="iconimg" />
                  <span class="visually-hidden">Big</span>
                </label>
              </div>
              <div class="col-auto mb-30">
                <input type="radio" id="edit-size-medium" name="icon_size" value="aioa-medium-icon" class="input-hidden aioa-iconsize">
                <label for="edit-size-medium" class="icon-label">
                  <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                       width="65" height="65" style="margin: auto" class="iconimg" />
                  <span class="visually-hidden">Medium</span>
                </label>
              </div>
              <div class="col-auto mb-30">
                <input type="radio" id="edit-size-default" name="icon_size" value="aioa-default-icon" class="input-hidden aioa-iconsize">
                <label for="edit-size-default" class="icon-label">
                  <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                       width="55" height="55" style="margin: auto" class="iconimg" />
                  <span class="visually-hidden">Default</span>
                </label>
              </div>
              <div class="col-auto mb-30">
                <input type="radio" id="edit-size-small" name="icon_size" value="aioa-small-icon" class="input-hidden aioa-iconsize">
                <label for="edit-size-small" class="icon-label">
                  <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                       width="45" height="45" style="margin: auto" class="iconimg" />
                  <span class="visually-hidden">Small</span>
                </label>
              </div>
              <div class="col-auto mb-30">
                <input type="radio" id="edit-size-extra-small" name="icon_size" value="aioa-extra-small-icon" class="input-hidden aioa-iconsize">
                <label for="edit-size-extra-small" class="icon-label">
                  <img src="https://www.skynettechnologies.com/sites/default/files/aioa-icon-type-1.svg"
                       width="35" height="35" style="margin: auto" class="iconimg" />
                  <span class="visually-hidden">Extra Small</span>
                </label>
              </div>
            </div>
          </div>
        </div>

      <!-- Submit Button -->
      <div class="form-group">
        <button type="submit" class="btn btn-primary aioa-btn">Save Changes</button>
      </div>
    </form>
  </div>
</div>
<div id="loader">
    <div class="spinner"></div>
</div>
                    </div>
                </div>`;
        const dialog = document.createElement('div');
        dialog.id = 'custom-akeneo-dialog';
        dialog.style = 'display:none;position: fixed;left: 0;top: 0;width: 100%;height: calc(var(--vh, 1vh) * 100 * var(--accessibility-content-scaling, 1));background-color: #000000b3;z-index: 10000000000000000;padding: 50px 15px;min-width: 0 !important;box-shadow: none !important;min-height: 0 !important;max-height: calc(var(--vh, 1vh) * 100 * var(--accessibility-content-scaling, 1)) !important;transform: none !important;';
        dialog.role="dialog";
        //dialog.aria-modal="true";
        dialog.innerHTML=settingModelHTML;
        document.body.appendChild(dialog);
        
        aioa_settings_meun.addEventListener('click', () => {
            dialog.style.display = 'flex';
        });
        
        const setting_jq = document.createElement('script');
        setting_jq.src = '/public/bundles/skynettechnologiesallinoneaccessibility/js/allinoneaccessibilityjq.min.js'; 
        document.head.appendChild(setting_jq); 
        
        const setting_js = document.createElement('script');
        setting_js.src = '/public/bundles/skynettechnologiesallinoneaccessibility/js/allinoneaccessibility.js'; 
        document.head.appendChild(setting_js); 

        document.getElementById('aioa-settings-close-button').addEventListener('click', () => {
          dialog.style.display = 'none';
        }); 
  }
}, 10000);
