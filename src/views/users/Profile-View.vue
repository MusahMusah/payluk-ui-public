<template>
    <div class="content-area__content">
        <div class="vue-back-to-top" style="bottom: 5%; right: 30px; display: none;">
            <button type="button" name="button" class="shadow-lg vs-component vs-button btn-back-to-top vs-button-primary vs-button-filled includeIcon includeIconOnly">
                <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                <i class="vs-icon notranslate icon-scale vs-button--icon feather icon-arrow-up null" style="order: 0; margin-right: 0px; margin-left: 0px;"></i>
                <!---->
                <span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
            </button>
        </div>
        <div id="page-user-view">
            <!---->
            <div id="user-data">
                <div class="vx-card mb-base">
                    <div class="vx-card__header">
                        <div class="vx-card__title">
                            <h4 class="">Account</h4>
                            <!---->
                        </div>
                        <!---->
                    </div>
                    <div class="vx-card__collapsible-content vs-con-loading__container">
                        <div class="vx-card__body">
                            <div class="vx-row">
                                <!-- /img/avatar-s-11.51a23c07.png -->
                                <div id="avatar-col" class="vx-col">
                                    <div class="mb-4 img-container">


                                    <img
                                    v-if="userData_info.small_image"
                                    :src="userData_info.small_image"
                                    alt="user-img"
                                    width="120"
                                    height="100"
                                    style="object-fit:cover"
                                    class="block rounded shadow-md cursor-pointer" />
                                    <img
                                    v-else
                                    :src="profileNoImage"
                                    alt="user-img"
                                    width="140"
                                    height="120"
                                    style="object-fit:cover"
                                    class="block rounded shadow-md cursor-pointer" />
                                    </div>
                                </div>
                                <div id="account-info-col-1" class="flex-1 vx-col">
                                    <table>
                                        <tr>
                                            <td class="p-2 pt-5 font-semibold">First Name</td>
                                            <td class="pt-5"> {{ userData_info.first_name }}</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 font-semibold">Last Name</td>
                                            <td>{{ userData_info.last_name }}</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 font-semibold">Email</td>
                                            <td clas="p-2">{{ userData_info.email }}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="account-info-col-2" class="flex-1 vx-col">
                                        <h2>Account Details</h2>
                                    <table>
                                        <tr>
                                            <td class="pt-2 font-semibold" style="font-size:1.2em !important">Main Balance</td>
                                            <td class="p-2 pt-5"><vs-chip color="primary" style="font-size:1.2em !important">N56,0000</vs-chip></td>
                                        </tr>
                                        <tr>

                                            <td class="pt-2 font-semibold" style="font-size:1.2em !important">Lain Balance</td>
                                            <td class="pt-3"><vs-chip color="primary" style="font-size:1.2em !important">N30,0000</vs-chip></td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="account-manage-buttons" class="flex w-full mt-3 vx-col">
                                    <vs-button type="button" to="/profile-update" name="button" class="mr-4 vs-component vs-button vs-button-primary vs-button-filled includeIcon">
                                        <span
                                            class="vs-button-backgroundx vs-button--background"
                                            style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                        ></span>
                                        <i class="vs-icon notranslate icon-scale feather icon-edit null"
                                            style="order: 0; margin-right: 5px; margin-left: 0px;"></i>
                                            <span class="vs-button-text vs-button--text">Update</span>
                                        <span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                    </vs-button>
                                    <!-- <button type="button" name="button" class="vs-component vs-button vs-button-danger vs-button-border includeIcon" style="background: transparent;">
                                        <span
                                            class="vs-button-backgroundx vs-button--background"
                                            style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"
                                        ></span>
                                        <i class="vs-icon notranslate icon-scale vs-button--icon feather icon-trash null"
                                        style="order: 0; margin-right: 5px; margin-left: 0px;"></i>
                                        <span class="vs-button-text vs-button--text">Delete</span>
                                        <span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                    </button> -->
                                </div>
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

            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            profileNoImage : require('@/assets/images/noimage.jpg'),
        }
    },
    computed : {
        ...mapGetters({
          userData : 'users/getUserData'
        }),
        userData_info (){
            return this.userData
        },
        fullname () {
            return `${this.userData_info.first_name} ${this.userData_info.last_name}`
        },
    },
    methods : {
        ...mapActions({
          activeUserInfo : "users/activeUserInfo",
        }),
    },
    created () {
        // this.activeUserInfo()
    }

}
</script>
