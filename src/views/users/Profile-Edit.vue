<template>
  <vx-card>
    <vs-tabs>
      <vs-tab
        ico="account_circle"
        label="Profile Image"
        style="text-align: center !important"
      >
        <div class="vx-row">
          <div class="w-full vx-col">
            <!-- <vx-card> -->
              <div
                class="mt-5 FieldField__wrapper"
                style="text-align: center !important"
              >
                <img
                  v-bind:src="imagePreview"
                  class="preview-image"
                  v-on:click="openUpload"
                />

                <div class="form-group">
                  <input
                    name="image"
                    type="file"
                    id="file-field"
                    required
                    v-on:change="updatePreview"
                    style="display: none"
                  />
                </div>

                <vs-button
                  color="primary"
                  class="mx-auto mt-3"
                  icon="cloud_upload"
                  @click="uploadFile"
                  >Upload Image</vs-button
                >
                <!-- <button @click="uploadFile">Upload</button> -->
              </div>
            <!-- </vx-card> -->
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Password" ico="info">
        <div class="con-slot-tabs">
          <div class="con-tab vs-tabs--content">
            <div class="tab-text">
              <div id="user-edit-tab-info" class="mt-4">
                <div class="vx-row">
                  <div class="w-full vx-col">
                    <!-- <vx-card> -->
                      <form @submit.prevent="update_password">
                        <div>
                          <div class="mb-8 vx-card__title">
                            <h4 class="mb-4">Update Password</h4>
                            <vs-alert
                              v-if="passSuccessMessage"
                              active="true"
                              color="success"
                            >
                              {{ passSuccessMessage }}
                            </vs-alert>
                            <p v-else>Please enter your new password.</p>
                          </div>
                          <!-- <vs-input type="email" label-placeholder="Email" v-model="value1" class="w-full mb-6" /> -->
                          <vs-input
                            ref="password"
                            data-vv-validate-on="blur"
                            v-validate="'required|min:6|max:10'"
                            name="password"
                            placeholder="Password"
                            v-model="password"
                            type="password"
                            label-placeholder="Password"
                            class="w-full mb-6"
                          />
                          <span class="text-sm text-danger">{{
                            errors.first("password")
                          }}</span>
                          <vs-input
                            type="password"
                            v-validate="'min:6|confirmed:password'"
                            data-vv-validate-on="blur"
                            data-vv-as="password"
                            name="confirm_password"
                            label-placeholder="Confirm Password"
                            placeholder="Confirm Password"
                            v-model="confirm_password"
                            class="w-full mb-8"
                          />
                          <span class="text-sm text-danger">{{
                            errors.first("confirm_password")
                          }}</span>

                          <div
                            class="flex flex-col-reverse flex-wrap justify-between sm:flex-row"
                          >
                            <!-- <vs-button type="border" to="/login" class="w-full mt-3 mb-8 sm:w-auto sm:mb-auto sm:mt-auto">Go Back To Login</vs-button> -->
                            <vs-button
                              class="w-full sm:w-auto"
                              :disabled="!validateForm"
                              @click="update_password"
                              >Update Password</vs-button
                            >
                            <!-- <button color="primary" type="submit"> Submit</button> -->
                          </div>
                        </div>
                      </form>
                    <!-- </vx-card> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Currency" ico="track_changes">
        <div class="con-slot-tabs">
          <div class="con-tab vs-tabs--content">
            <div class="tab-text">
              <div id="user-edit-tab-currency" class="mt-4">
                <div class="vx-row">
                  <div class="w-full vx-col">
                    <!-- <vx-card> -->
                      <form @submit.prevent="update_password">
                        <div class="pt-8">
                          <div class="mb-8 vx-card__title">
                            <h4 class="mb-4">Change Currency</h4>
                            <vs-alert
                              v-if="currencySuccessMessage"
                              active="true"
                              color="success"
                            >
                              {{ currencySuccessMessage }}
                            </vs-alert>
                            <p v-else>
                              Choose Bellow Your Prefered Currency for Any
                              Transaction
                            </p>
                          </div>
                          <label for="">Choose Default Currency</label>
                          <v-select
                            v-validate="'required'"
                            name="Currency"
                            data-vv-validate-on="blur"
                            v-model="selected"
                            class="w-full"
                            :options="options"
                          ></v-select>
                          <span class="text-sm text-danger">{{
                            errors.first("Currency")
                          }}</span>
                          <div
                            class="flex flex-col-reverse flex-wrap justify-between mt-4 sm:flex-row"
                          >
                            <!-- <vs-button type="border" to="/login" class="w-full mt-3 mb-8 sm:w-auto sm:mb-auto sm:mt-auto">Go Back To Login</vs-button> -->
                            <vs-button
                              class="w-full mt-10 sm:w-auto"
                              @click="update_currency"
                              >Change Currency</vs-button
                            >
                            <!-- <button color="primary" type="submit"> Submit</button> -->
                          </div>
                        </div>
                      </form>
                    <!-- </vx-card> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>
    </vs-tabs>
  </vx-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vSelect from "vue-select";
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      confirm_password: "",
      passSuccessMessage: "",
      currencySuccessMessage:"",
      imagePreview: require("@/assets/images/Placeholder.jpg"),
      selectedFile: null,
      filecheck: 0,
      // vSelect
      options: [
        { currency: 1, label: "NGN" },
        { currency: 2, label: "USD" },
        { currency: 3, label: "EUR" },
      ],
      selected: { currency: 4, label: 'USD' }
    };
  },
  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.password != "" &&
        this.confirm_password != ""
      );
    },
    ...mapGetters({
      getAllCurrencies: "users/getAllCurrencies",
    }),
    selected_currency(){
        return this.userData.currency
    }
  },
  methods: {
    ...mapActions({
        uploadProfilePicture: "authentication/uploadProfilePicture",
        updatePassword: "users/updatePassword",
        updateCurrency: "users/updateCurrency",
    }),
    openUpload() {
      document.getElementById("file-field").click();
    },
    updatePreview(e) {
      // console.log('e', e)
      var reader,
        files = e.target.files;
      // console.log(files.length)
      if (files.length === 0) {
        console.log("Empty");
      }
      this.filecheck = files.length;
      reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(files[0]);
      this.selectedFile = e.target.files[0];
      // console.log(this.selectedFile)
    },
    uploadFile() {
      // Loading
      if (this.filecheck == 0) {
        return this.$vs.notify({
          title: "Info",
          text: "Please Choose a Picture to Upload First",
          position:'top-right',
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger",
        });
      }
      this.$vs.loading({type: 'border'});
      const formData = new FormData();
      formData.append("file", this.selectedFile, this.selectedFile.name);
      axios
        .post("profile/upload", formData)
        .then((res) => {
          this.$vs.loading.close();
          // console.log(res)
          this.$vs.notify({
            title: "Success",
            text: res.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          this.imagePreview = require("@/assets/images/Placeholder.jpg");
          this.$router.push("/dashboard/analytics").catch((err) => {
            console.log(err);
          });
        })
        .catch(() => {
          this.$vs.loading.close();
          // console.log(res)
          this.$vs.notify({
            title: "Error",
            // text : e.data.message,
            text: "File Size is above the Maximum size Allowed",
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    update_password() {
      const payload = {
        password: this.password,
        confirm_password: this.confirm_password,
      };
      // Loading
      this.$vs.loading();
      this.updatePassword(payload)
        .then((response) => {
          // console.log(response)
          this.passSuccessMessage = response.data.message;
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          (this.password = ""), (this.confirm_password = "");
        })
        .catch((error) => {
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: Object(error.response.data.messages.error),
            position:'top-right',
            // text: error.response.data,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    update_currency() {
      const payload = {
        currency: this.selected.label,
      };
      // Loading
      this.$vs.loading();
      this.updateCurrency(payload)
        .then((response) => {
          // console.log(response.data)
          this.currencySuccessMessage = response.data.message;
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
           setTimeout(() => {
              location.reload()
            }, 800);
        //   (this.password = ""), (this.confirm_password = "");
        })
        .catch((error) => {
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: Object(error.response.data.messages.error),
            position:'top-right',
            // text: error.response.data,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
  },
  created() {
    // this.allCurrencies();
  },
  components: {
    "v-select": vSelect,
  },
};
</script>

<style scoped>
.preview-image {
  /* width: 327px; */
  /* width: 35vw; */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 45vh;
  /* height: 50vh; */
  text-align: center;
  object-fit: contain;
  /* object-fit: cover; */
}
</style>
