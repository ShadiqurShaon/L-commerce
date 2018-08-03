<template>
    <div class="">
        <div class="row">
         <form v-on:submit.prevent="onSubmit">
             <div class="col l5 dalivery" style="border:1px solid gray">
                 <h3>Delivery Info</h3>
                 <hr>
                 
            <fieldset class="form-group">
                <label>Name</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.name" placeholder="Name">
            </fieldset>
            <fieldset class="form-group">
                <label>Email</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.email" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
                <label>Phone Number</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.phone_number" placeholder="Phone Number">
            </fieldset>
             <fieldset class="form-group">
                 <label>Alternate Phone Number</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.alternate_phone_number" placeholder="Alternate Phone Number">
            </fieldset>
            <fieldset class="form-group">
                <label>Location</label>
                
                <select v-model="dalivery.location" >
                        <option disabled="disabled"  value="select your Location">select your Location</option>
                        <option value="Dhaka City">Dhaka City</option>
                        <option value="OutSide Dhaka City">OutSide Dhaka City</option>

                        </select>
            </fieldset>

             <fieldset class="form-group">
                 <label>Address</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.address" placeholder="Address">
            </fieldset>

             <fieldset class="form-group">
                 <label>Land Mark</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.land_mark" placeholder="Land Mark">
            </fieldset>
             <fieldset class="form-group">
                 <label>Special note/instruction</label>
              <input class="form-control form-control-lg" type="text" v-model="dalivery.special_note" placeholder="Special Note">
            </fieldset>

            </div>
            <div class="col l4">
                <div class="payment-method" style="border:1px solid gray">
                    <h3>Payment Method</h3>
                        <hr>
                    <div class="radio align" style="display:block ">
                         <div><input class="side-side" type="radio"  v-model="dalivery.payment" value="bKash"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/bikash.jpg`" alt=""> <span>bKash</span></div>
                    </div>
                    <div class="radio align" style="display:block">
                         <div><input class="side-side" type="radio"  v-model="dalivery.payment" value="InstantPay"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/ipay.jpg`" alt=""> <span>InstantPay</span></div>
                    </div>
                    <div class="radio align" style="display:block">
                         <div><input class="side-side" type="radio"  v-model="dalivery.payment" value="City_Bank"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/cityBank.jpg`" alt=""> <span>City Bank</span></div>
                    </div>
                    <div class="radio align" style="display:block">
                         <div><input class="side-side" type="radio" v-model="dalivery.payment" value="EasyPayBd"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/easyPayment.jpg`" alt=""> <span>EasyPayBd</span></div>
                    </div>
                    <div class="radio align" style="display:block">
                         <div><input class="side-side" type="radio" v-model="dalivery.payment" value="EBL_SKY"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/eblsky.jpg`" alt=""> <span>EBL SKY </span></div>
                    </div>
                    <div class="radio align" style="display:block">
                         <div><input class="side-side" type="radio" v-model="dalivery.payment" value="Cash_On_Delivery"> <img class="side-img" style="width:40px;height:40px;" :src="`/static/photos/cashOnDelivery.jpg`" alt=""> <span>Cash On Delivery</span></div>
                    </div>

                </div>
            </div>
            <div class="col l3">
                <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="dalivery.referal" placeholder="Referal number">
            </fieldset>
            </div>
            <div class="col l6" style="border:1px solid gray;margin:10px;">
    


                    {{getCart}}

              
            </div>
            <button class="btn btn-lg btn-primary pull-xs-right">
             Confirm
            </button>
          </form>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
 
 
       computed: {
    ...mapGetters(["getCart"])

 
  },
  data() {
    return {
      dalivery: {
        name: "",
        email: "",
        phone_number: "",
        alternate_phone_number: "",
        location: "",
        address: "",
        land_mark: "",
        special_note: "",
        payment: "",
        referal: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.dalivery);
    }
  }
};
</script>
<style scoped>
.payment-method h3 {
  text-align: center;
}
/* .align {
  margin-left: 10px;
} */
/* .align .side-side{
  margin-bottom: 10px
} */
/* .align .side-img{
  margin-top: 10px;
} */
/* label img{
  margin-top: 10px;
} */


.radio div input {
  left: 0;
  margin-top: 5px!important;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 2 !important;
  position: initial!important;
  margin-bottom: 25px;
}
.radio div img {
  width: 45px;
  height: 38px;
  margin-right: 8px;
  margin-bottom: -14px;
}
.dalivery h3 {
  text-align: center;
}

.form-group{
  border: none;
  color: black;
}

.form-group label{
  color: #405d9b;
  font-size: 20px;
}

</style>
