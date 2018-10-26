<template lang="html">
  <div class="">
    <Header>
      Contact
    </Header>
    <form method="post" class="container">
      <h3>Drop Us a Message</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input v-model="Name" type="text" name="txtName" class="form-control" v-bind:class="{'border border-warning' : isNameEmpty, 'border border-success' : !isNameEmpty}" placeholder="Your Name *" value="" />
            <p v-if="isNameEmpty">Enter your Name</p>
          </div>
          <div class="form-group">
            <input v-model="Email" v-bind:class="{'border border-warning' : isEmailEmpty, 'border border-success' : isEmailValid, 'border border-danger' : !isEmailValid}" type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
            <p v-if="isEmailEmpty">Enter your Email</p>
            <p v-else-if="isEmailValid">The email is valid</p>
            <p v-else>The email is invalid</p>
          </div>
          <div class="form-group">
            <select v-model="Reason" class="" name="" v-bind:class="{'border border-warning' : isReasonEmpty, 'border border-success' : !isReasonEmpty}">
              <option value="complaints">complaints</option>
              <option value="thanks">thanks</option>
              <option value="other">other</option>
            </select>
            <p v-if="isReasonEmpty">Select a reason for contacting us</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea v-model="Message" v-bind:class="{'border border-warning' : isMessageEmpty, 'border border-success' : !isMessageEmpty}" name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
            <p v-if="isMessageEmpty">Enter a message</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <input type="submit" name="btnSubmit" class="btn ml-3" value="Send Message" />
        </div>
      </div>
    </form>
    <div class="fixed-bottom">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import FooterBar from '@/components/footerBar.vue'

export default {
  name: 'Contact',
  components:  {
    Header,
    FooterBar
  },
  data: function () {
    return {
      Name: "",
      Email: "",
      Reason: "",
      Message: "",
    }
  },
  computed: {
    isNameEmpty : function () {
      var check;
      this.Name == "" ? check = true : check = false;
      return check;
    },
    isEmailEmpty : function () {
      var check;
      this.Email == "" ? check = true : check = false;
      return check;
    },
    isEmailValid : function () {
      var regex = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/g;
      var result;
      if (regex.test(this.Email)) {
        console.log("correct");
        result = true;
      }
      else {
        result = false;
      }
      return result;
    },
    isReasonEmpty : function () {
      var check;
      this.Reason == "" ? check = true : check = false;
      return check;
    },
    isMessageEmpty : function () {
      var check;
      this.Message == "" ? check = true : check = false;
      return check;
    }
  }
}
</script>

<style lang="css">
</style>
