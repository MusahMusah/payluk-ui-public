<template>
    <vs-tabs :color="colorx">
        <vs-tab  icon="account_circle" label="Account">
            <div class="con-tab-ejemplo">
                <div class="con-slot-tabs">
                    <div class="con-tab vs-tabs--content">
                        <div class="tab-text">
                            <div id="user-edit-tab-info" class="mt-4">
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div class="flex items-start flex-col sm:flex-row">
                                            <img src="/img/avatar-s-11.51a23c07.png" class="mr-8 rounded h-24 w-24" />
                                            <div>
                                                <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">Angelo Sashington</p>
                                                <input type="file" accept="image/*" class="hidden" />
                                                <button type="button" name="button" class="vs-component vs-button mr-4 mb-4 vs-button-primary vs-button-filled">
                                                    <span
                                                        class="vs-button-backgroundx vs-button--background"
                                                        style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                                    ></span>
                                                    <!---->
                                                    <span class="vs-button-text vs-button--text">Change Avatar</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                                </button>
                                                <button type="button" name="button" class="vs-component vs-button vs-button-danger vs-button-border" style="background: transparent;">
                                                    <span
                                                        class="vs-button-backgroundx vs-button--background"
                                                        style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                                    ></span>
                                                    <!---->
                                                    <span class="vs-button-text vs-button--text">Remove Avatar</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Username</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="username" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Name</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="name" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Email</label>
                                            <div class="vs-con-input">
                                                <input type="email" name="email" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <div class="mt-4">
                                            <label class="vs-input--label">Status</label>
                                            <div dir="ltr" class="v-select vs--single vs--searchable" name="status">
                                                <div class="vs__dropdown-toggle">
                                                    <div class="vs__selected-options">
                                                        <span class="vs__selected">
                                                            Active
                                                            <!---->
                                                        </span>
                                                        <input aria-label="Search for option" role="combobox" type="search" autocomplete="off" class="vs__search" />
                                                    </div>

                                                    <div class="vs__actions">
                                                        <button type="button" title="Clear selection" class="vs__clear" style="display: none;">
                                                            <span class="feather-icon select-none relative">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="feather feather-x w-4 h-4 mt-1"
                                                                >
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                        <span class="feather-icon select-none relative vs__open-indicator" role="presentation">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24px"
                                                                height="24px"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-chevron-down w-5 h-5"
                                                            >
                                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                            </svg>
                                                        </span>
                                                        <div class="vs__spinner" style="display: none;">Loading...</div>
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                            <span class="text-danger text-sm" style="display: none;"></span>
                                        </div>
                                        <div class="mt-4">
                                            <label class="vs-input--label">Role</label>
                                            <div dir="ltr" class="v-select vs--single vs--searchable" name="role">
                                                <div class="vs__dropdown-toggle">
                                                    <div class="vs__selected-options">
                                                        <span class="vs__selected">
                                                            Admin
                                                            <!---->
                                                        </span>
                                                        <input aria-label="Search for option" role="combobox" type="search" autocomplete="off" class="vs__search" />
                                                    </div>

                                                    <div class="vs__actions">
                                                        <button type="button" title="Clear selection" class="vs__clear" style="display: none;">
                                                            <span class="feather-icon select-none relative">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="feather feather-x w-4 h-4 mt-1"
                                                                >
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                        <span class="feather-icon select-none relative vs__open-indicator" role="presentation">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24px"
                                                                height="24px"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-chevron-down w-5 h-5"
                                                            >
                                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                            </svg>
                                                        </span>
                                                        <div class="vs__spinner" style="display: none;">Loading...</div>
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                            <span class="text-danger text-sm" style="display: none;"></span>
                                        </div>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Company</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="company" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                    </div>
                                </div>
                                <div class="vx-card mt-base no-shadow card-border">
                                    <!---->
                                    <div class="vx-card__collapsible-content vs-con-loading__container">
                                        <div class="vx-card__body">
                                            <div class="vx-row">
                                                <div class="vx-col w-full">
                                                    <div class="flex items-end px-3">
                                                        <span class="mr-2 feather-icon select-none relative">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24px"
                                                                height="24px"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-lock w-6 h-6"
                                                            >
                                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                            </svg>
                                                        </span>
                                                        <span class="font-medium text-lg leading-none">Permissions</span>
                                                    </div>
                                                    <div class="vs-component vs-divider">
                                                        <span class="vs-divider-border after vs-divider-border-default" style="width: 100%; border-top: 1px solid rgba(0, 0, 0, 0.1);"></span>
                                                        <!---->
                                                        <span class="vs-divider-border before vs-divider-border-default" style="width: 100%; border-top: 1px solid rgba(0, 0, 0, 0.1);"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="block overflow-x-auto">
                                                <table class="w-full">
                                                    <tr>
                                                        <th class="font-semibold text-base text-left px-3 py-2">Module</th>
                                                        <th class="font-semibold text-base text-left px-3 py-2">Read</th>
                                                        <th class="font-semibold text-base text-left px-3 py-2">Write</th>
                                                        <th class="font-semibold text-base text-left px-3 py-2">Create</th>
                                                        <th class="font-semibold text-base text-left px-3 py-2">Delete</th>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-3 py-2">users</td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="false" />
                                                                <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="false" />
                                                                <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="false" />
                                                                <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-3 py-2">posts</td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-3 py-2">comments</td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="false" />
                                                                <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="true" />
                                                                <span class="checkbox_x vs-checkbox">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                        <td class="px-3 py-2">
                                                            <div class="vs-component con-vs-checkbox vs-checkbox-primary vs-checkbox-default">
                                                                <input type="checkbox" class="vs-checkbox--input" value="false" />
                                                                <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                                    <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                                </span>
                                                                <span class="con-slot-label"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="vx-card__code-container collapsed" style="max-height: 0px; display: none;">
                                        <div class="code-content">
                                            <pre class="language-markup"><code class="language-markup"></code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div class="mt-8 flex flex-wrap items-center justify-end">
                                            <button type="button" name="button" class="vs-component vs-button ml-auto mt-2 vs-button-primary vs-button-filled">
                                                <span
                                                    class="vs-button-backgroundx vs-button--background"
                                                    style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                                ></span>
                                                <!---->
                                                <span class="vs-button-text vs-button--text">Save Changes</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                            </button>
                                            <button type="button" name="button" class="vs-component vs-button ml-4 mt-2 vs-button-warning vs-button-border" style="background: transparent;">
                                                <span
                                                    class="vs-button-backgroundx vs-button--background"
                                                    style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                                ></span>
                                                <!---->
                                                <span class="vs-button-text vs-button--text">Reset</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vs-tab>
        <vs-tab label="Information" icon="info">
            <div class="con-slot-tabs">
                <div class="con-tab vs-tabs--content">
                    <div class="tab-text">
                        <div id="user-edit-tab-info" class="mt-4">
                            <div class="vx-row">
                                <div class="vx-col w-full md:w-1/2">
                                    <div class="flex items-end">
                                        <span class="mr-2 feather-icon select-none relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-user w-5 h-5"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <span class="leading-none font-medium">Personal Information</span>
                                    </div>
                                    <div>
                                        <div class="mt-4">
                                            <label class="text-sm">Birth Date</label><input type="text" data-input="true" name="dob" class="w-full flatpickr-input" readonly="readonly" /><span class="text-danger text-sm" style="display: none;"></span>
                                        </div>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Mobile</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="mobile" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Website</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="website" data-vv-as="field" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="mt-4">
                                            <label class="text-sm">Languages</label>
                                            <div dir="ltr" class="v-select vs--searchable" name="lang_known">
                                                <div class="vs__dropdown-toggle">
                                                    <div class="vs__selected-options">
                                                        <span class="vs__selected">
                                                            English
                                                            <button type="button" aria-label="Deselect option" class="vs__deselect">
                                                                <span class="feather-icon select-none relative">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-x w-4 h-4 mt-1"
                                                                    >
                                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </span>
                                                        <span class="vs__selected">
                                                            Arabic
                                                            <button type="button" aria-label="Deselect option" class="vs__deselect">
                                                                <span class="feather-icon select-none relative">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24px"
                                                                        height="24px"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-x w-4 h-4 mt-1"
                                                                    >
                                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </span>
                                                        <input aria-label="Search for option" role="combobox" type="search" autocomplete="off" class="vs__search" />
                                                    </div>

                                                    <div class="vs__actions">
                                                        <button type="button" title="Clear selection" class="vs__clear" style="display: none;">
                                                            <span class="feather-icon select-none relative">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="feather feather-x w-4 h-4 mt-1"
                                                                >
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                        <span class="feather-icon select-none relative vs__open-indicator" role="presentation">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24px"
                                                                height="24px"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-chevron-down w-5 h-5"
                                                            >
                                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                            </svg>
                                                        </span>
                                                        <div class="vs__spinner" style="display: none;">Loading...</div>
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                            <span class="text-danger text-sm" style="display: none;"></span>
                                        </div>
                                        <div class="mt-4">
                                            <label class="text-sm">Gender</label>
                                            <div class="mt-2">
                                                <label class="vs-component con-vs-radio mr-4 vs-radio-primary">
                                                    <input name="male" type="radio" class="vs-radio--input" value="male" /><span class="vs-radio"><span class="vs-radio--borde"></span><span class="vs-radio--circle"></span></span>
                                                    <span class="vs-radio--label">Male</span>
                                                </label>
                                                <label class="vs-component con-vs-radio mr-4 vs-radio-primary">
                                                    <input name="male" type="radio" class="vs-radio--input" value="male" />
                                                    <span class="vs-radio"><span class="vs-radio--borde" style="border: 2px solid rgb(200, 200, 200);"></span><span class="vs-radio--circle"></span></span><span class="vs-radio--label">Female</span>
                                                </label>
                                                <label class="vs-component con-vs-radio vs-radio-primary">
                                                    <input name="male" type="radio" class="vs-radio--input" value="male" />
                                                    <span class="vs-radio"><span class="vs-radio--borde" style="border: 2px solid rgb(200, 200, 200);"></span><span class="vs-radio--circle"></span></span><span class="vs-radio--label">Other</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mt-6">
                                            <label>Contact Options</label>
                                            <div class="flex flex-wrap mt-1">
                                                <div class="vs-component con-vs-checkbox mr-4 mb-2 vs-checkbox-primary vs-checkbox-default">
                                                    <input type="checkbox" class="vs-checkbox--input" value="email,message,phone" />
                                                    <span class="checkbox_x vs-checkbox">
                                                        <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                    </span>
                                                    <span class="con-slot-label">Email</span>
                                                </div>
                                                <div class="vs-component con-vs-checkbox mr-4 mb-2 vs-checkbox-primary vs-checkbox-default">
                                                    <input type="checkbox" class="vs-checkbox--input" value="email,message,phone" />
                                                    <span class="checkbox_x vs-checkbox">
                                                        <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                    </span>
                                                    <span class="con-slot-label">Message</span>
                                                </div>
                                                <div class="vs-component con-vs-checkbox mb-2 vs-checkbox-primary vs-checkbox-default">
                                                    <input type="checkbox" class="vs-checkbox--input" value="email,message,phone" />
                                                    <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                        <span class="vs-checkbox--check"><i class="vs-icon notranslate icon-scale vs-checkbox--icon material-icons null">check</i></span>
                                                    </span>
                                                    <span class="con-slot-label">Phone</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vx-col w-full md:w-1/2">
                                    <div class="flex items-end md:mt-0 mt-base">
                                        <span class="mr-2 feather-icon select-none relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-map-pin w-5 h-5"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </span>
                                        <span class="leading-none font-medium">Address</span>
                                    </div>
                                    <div>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Address Line 1</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="addd_line_1" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Address Line 2</label>
                                            <div class="vs-con-input">
                                                <input type="text" class="vs-inputx vs-input--input normal" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Post Code</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="post_code" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">City</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="city" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">State</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="state" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                            <label for="" class="vs-input--label">Country</label>
                                            <div class="vs-con-input">
                                                <input type="text" name="country" class="vs-inputx vs-input--input normal hasValue" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                                <!----><!----><!---->
                                            </div>
                                            <span></span>
                                        </div>
                                        <span class="text-danger text-sm" style="display: none;"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                    <div class="mt-8 flex flex-wrap items-center justify-end">
                                        <button type="button" name="button" class="vs-component vs-button ml-auto mt-2 vs-button-primary vs-button-filled">
                                            <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                                            <!---->
                                            <span class="vs-button-text vs-button--text">Save Changes</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                        </button>
                                        <button type="button" name="button" class="vs-component vs-button ml-4 mt-2 vs-button-warning vs-button-border" style="background: transparent;">
                                            <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                                            <!---->
                                            <span class="vs-button-text vs-button--text">Reset</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vs-tab>
        <vs-tab label="Social" icon="share">
            <div class="con-tab vs-tabs--content">
                <div class="tab-text">
                    <div id="user-edit-tab-info" class="mt-4">
                        <div class="vx-row">
                            <div class="vx-col w-full md:w-1/2">
                                <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                                    <label for="" class="vs-input--label">Twitter</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="twitter" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-twitter null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                                <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                    <label for="" class="vs-input--label">Facebook</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="facebook" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-facebook null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                                <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                    <label for="" class="vs-input--label">Instagram</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="instagram" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-instagram null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                            </div>
                            <div class="vx-col w-full md:w-1/2">
                                <div class="vs-component vs-con-input-label vs-input w-full mt-4 md:mt-0 vs-input-primary">
                                    <label for="" class="vs-input--label">GitHub</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="github" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-github null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                                <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                    <label for="" class="vs-input--label">CodePen</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="codepen" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-codepen null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                                <div class="vs-component vs-con-input-label vs-input w-full mt-4 vs-input-primary">
                                    <label for="" class="vs-input--label">Slack</label>
                                    <div class="vs-con-input">
                                        <input type="text" name="slack" class="vs-inputx vs-input--input normal hasValue hasIcon" style="border: 1px solid rgba(0, 0, 0, 0.2);" />
                                        <!---->
                                        <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-slack null icon-no-border"></i>
                                        <!---->
                                    </div>
                                    <span></span>
                                </div>
                                <span class="text-danger text-sm" style="display: none;"></span>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col w-full">
                                <div class="mt-8 flex flex-wrap items-center justify-end">
                                    <button type="button" name="button" class="vs-component vs-button ml-auto mt-2 vs-button-primary vs-button-filled">
                                        <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                                        <!---->
                                        <span class="vs-button-text vs-button--text">Save Changes</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                    </button>
                                    <button type="button" name="button" class="vs-component vs-button ml-4 mt-2 vs-button-warning vs-button-border" style="background: transparent;">
                                        <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                                        <!---->
                                        <span class="vs-button-text vs-button--text">Reset</span><span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </vs-tab>
    </vs-tabs>
</template>
