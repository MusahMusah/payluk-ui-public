<template>
    <div class="content-area__content">
        <div class="vue-back-to-top" style="bottom: 5%; right: 30px; display: none;">
            <button type="button" name="button" class="vs-component vs-button shadow-lg btn-back-to-top vs-button-primary vs-button-filled includeIcon includeIconOnly">
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
                                    <div class="img-container mb-4">
                                            
                                    
                                    <img 
                                    v-if="userData_info.small_image"
                                    :src="userData_info.small_image"
                                    alt="user-img"
                                    width="120"
                                    height="100"
                                    style="object-fit:cover"
                                    class="rounded shadow-md cursor-pointer block" />
                                    <img 
                                    v-else
                                    :src="profileNoImage"
                                    alt="user-img"
                                    width="140"
                                    height="120"
                                    style="object-fit:cover"
                                    class="rounded shadow-md cursor-pointer block" />
                                    </div>
                                </div>
                                <div id="account-info-col-1" class="vx-col flex-1">
                                    <table>
                                        <tr>
                                            <td class="font-semibold pt-5 p-2">First Name</td>
                                            <td class="pt-5"> {{ userData_info.first_name }}</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold p-2">Last Name</td>
                                            <td>{{ userData_info.last_name }}</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold p-2">Email</td>
                                            <td clas="p-2">{{ userData_info.email }}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="account-info-col-2" class="vx-col flex-1">
                                        <h2>Account Details</h2>
                                    <table>
                                        <tr>
                                            <td class="font-semibold pt-2" style="font-size:1.2em !important">Main Balance</td>
                                            <td class="pt-5 p-2"><vs-chip color="primary" style="font-size:1.2em !important">N56,0000</vs-chip></td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="font-semibold pt-2" style="font-size:1.2em !important">Lain Balance</td>
                                            <td class="pt-3"><vs-chip color="primary" style="font-size:1.2em !important">N30,0000</vs-chip></td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="account-manage-buttons" class="vx-col w-full flex mt-3">
                                    <vs-button type="button" to="/profile-update" name="button" class="vs-component vs-button mr-4 vs-button-primary vs-button-filled includeIcon">
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
                <div class="vx-row">
                    <div class="vx-col lg:w-1/2 w-full">
                        <div class="vx-card mb-base">
                            <div class="vx-card__header">
                                <div class="vx-card__title">
                                    <h4 class="">Information</h4>
                                    <!---->
                                </div>
                                <!---->
                            </div>
                            <div class="vx-card__collapsible-content vs-con-loading__container">
                                <div class="vx-card__body">
                                    <table>
                                        <tr>
                                            <td class="font-semibold">Birth Date</td>
                                            <td>28 January 1998</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Mobile</td>
                                            <td>+65958951757</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Website</td>
                                            <td>https://rowboat.com/insititious/Angelo</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Languages</td>
                                            <td>English, Arabic</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Gender</td>
                                            <td>male</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Contact</td>
                                            <td>email, message, phone</td>
                                        </tr>
                                    </table>
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
                    <div class="vx-col lg:w-1/2 w-full">
                        <div class="vx-card mb-base">
                            <div class="vx-card__header">
                                <div class="vx-card__title">
                                    <h4 class="">Social Links</h4>
                                    <!---->
                                </div>
                                <!---->
                            </div>
                            <div class="vx-card__collapsible-content vs-con-loading__container">
                                <div class="vx-card__body">
                                    <table>
                                        <tr>
                                            <td class="font-semibold">Twitter</td>
                                            <td>https://twitter.com/adoptionism744</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Facebook</td>
                                            <td>https://www.facebook.com/adoptionism664</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Instagram</td>
                                            <td>https://www.instagram.com/adopt-ionism744/</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Github</td>
                                            <td>https://github.com/madop818</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">CodePen</td>
                                            <td>https://codepen.io/adoptism243</td>
                                        </tr>
                                        <tr>
                                            <td class="font-semibold">Slack</td>
                                            <td>@adoptionism744</td>
                                        </tr>
                                    </table>
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
        this.activeUserInfo()
    }
    
}
</script>